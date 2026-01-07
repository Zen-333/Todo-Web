import { useState } from 'react';
import './App.css'
import InputField from './components/InputField';
import type { Todo } from "./model";
import TodoList from './components/TodoList';
import { DragDropContext, type DropResult } from "@hello-pangea/dnd";


let role: [number, string]; // will contain 1 number and 1 string
let printName: (name: string) => never; // never = return nothing void = returns undefined
let personName: unknown; // unkown is better than any
// 13m never void

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>(""); // type of string can add multiple like string or number
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => 
    {
      e.preventDefault();

      if(todo)
        {
          setTodos([...todos, {id: Date.now(), todo, isDone: false}]); // Create a new array that contains everything from todos, then add one more element
          setTodo("");
        }
    };

    const onDragEnd = (result: DropResult) => {
      const {source, destination} = result;

      if(!destination || (destination.droppableId === source.droppableId && destination.index === source.index)) return;

      let add,
        active = todos,
        complete = completedTodos;

      if(source.droppableId === "TodosList")
        {
          add = active[source.index];
          active.splice(source.index, 1);
        }  else
        {
            add = complete[source.index];
            complete.splice(source.index, 1);
        }

        if(destination.droppableId === "TodosList")
        {
          active.splice(destination.index, 0, add);
        }  else
        {
          complete.splice(destination.index, 0, add);
        }  

      setCompletedTodos(complete)  
      setTodos(active);

    };  

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading">Today's Tasks</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
        <TodoList 
        todos={todos} 
        setTodos={setTodos}
        completedTodos={completedTodos}
        setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>  
  )
}

export default App
