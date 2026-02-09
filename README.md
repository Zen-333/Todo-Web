# React TypeScript Todo App

A modern, interactive todo application built with React, TypeScript, and Vite, featuring drag-and-drop functionality for task management. This project serves as a comprehensive learning resource for modern React development with TypeScript.

Live link: https://ztodowebapp.netlify.app/

## 📚 Educational Purpose

This project was created as a learning exercise to understand and implement:
- React 19 with TypeScript
- Modern React hooks (useState, useRef, useEffect)
- Component composition and prop typing
- Drag-and-drop interactions
- State management patterns
- Vite build tooling
- ESLint configuration

## ✨ Features

- **Task Management**: Add, edit, delete, and mark tasks as complete
- **Drag & Drop**: Intuitive drag-and-drop interface to move tasks between active and completed lists
- **Real-time Updates**: Immediate visual feedback for all task operations
- **Persistent State**: Tasks maintain their state during the session
- **Responsive Design**: Fully responsive layout that works on mobile and desktop
- **Type Safety**: Full TypeScript implementation with proper type definitions

## 🛠️ Tech Stack

### Core
- **React 19.2.0** - Latest React with modern features
- **TypeScript 5.9.3** - Static type checking
- **Vite 7.3.0** - Fast development and build tool

### Libraries
- **@hello-pangea/dnd** - Drag-and-drop functionality (React 19-compatible fork of react-beautiful-dnd)
- **react-icons** - Icon library for UI elements

### Development Tools
- **ESLint** - Code linting with TypeScript support
- **TypeScript ESLint** - TypeScript-specific linting rules
- **Vite Plugin React** - Fast refresh and JSX transformation

## 📁 Project Structure

```
react-ts-todo-app/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── InputField.tsx      # Task input component
│   │   ├── SingleTodo.tsx      # Individual task component
│   │   ├── TodoList.tsx        # Task list container
│   │   └── styles.css          # Component styles
│   ├── assets/
│   │   └── react.svg
│   ├── App.tsx                 # Main application component
│   ├── App.css                 # Application styles
│   ├── model.ts                # TypeScript interfaces
│   ├── main.tsx               # Application entry point
│   └── index.css              # Global styles
├── eslint.config.js           # ESLint configuration
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite configuration
└── package.json               # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 20.19.0 or 22.12.0+)
- npm (version 8.0.0+)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-ts-todo-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build locally

## 💡 Key Learning Concepts

### TypeScript Integration

**Interface Definitions** (`src/model.ts`):
```typescript
export interface Todo {
    id: number;
    todo: string;
    isDone: boolean;
}
```

**Component Props Typing**:
```typescript
interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}
```

### React Hooks Implementation

**State Management**:
```typescript
const [todo, setTodo] = useState<string>("");
const [todos, setTodos] = useState<Todo[]>([]);
const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);
```

**Ref Usage**:
```typescript
const inputRef = useRef<HTMLInputElement>(null);
```

**Side Effects**:
```typescript
useEffect(() => {
    inputRef.current?.focus();
}, [edit]);
```

### Drag-and-Drop Implementation

The app uses `@hello-pangea/dnd` for drag-and-drop:

```typescript
<DragDropContext onDragEnd={onDragEnd}>
    <Droppable droppableId="TodosList">
        <Draggable draggableId={todo.id.toString()} index={index}>
```

### Component Architecture

1. **App.tsx** - Main container managing global state
2. **InputField** - Controlled input with form handling
3. **TodoList** - Droppable zones for active and completed tasks
4. **SingleTodo** - Individual task with edit, delete, and complete actions

## 🎨 Styling Approach

- Custom CSS with modern features
- Google Fonts integration (Neucha, Happy Monkey, Protest Guerrilla)
- Responsive design with media queries
- Box shadows and transitions for enhanced UX
- Background images for visual appeal

## 🔧 Configuration Files

### TypeScript Configuration
- `tsconfig.json` - Base configuration
- `tsconfig.app.json` - Application-specific settings
- `tsconfig.node.json` - Node environment settings

### ESLint Configuration
Strict linting rules including:
- React Hooks rules
- React Refresh rules
- TypeScript-specific rules
- Modern JavaScript features

## 🎯 Core Functionality

### Adding Tasks
Tasks are added through the InputField component with form submission handling and automatic input blur.

### Editing Tasks
Double-click or click the edit icon to enter edit mode. Changes are saved on form submission.

### Completing Tasks
Click the checkmark icon to toggle task completion status with visual strikethrough.

### Deleting Tasks
Click the delete icon to remove tasks from the list.

### Drag & Drop
Drag tasks between "Active Tasks" and "Completed Tasks" sections for quick organization.

## 📝 Code Quality

The project follows best practices:
- Strict TypeScript compilation
- ESLint with recommended rules
- Proper prop types and interfaces
- Functional components with hooks
- Clean component separation
- Consistent code formatting

## 🚧 Learning Extensions

Consider these enhancements for further learning:
- Add local storage persistence
- Implement task categories/tags
- Add due dates and reminders
- Create task filtering options
- Add task search functionality
- Implement dark mode
- Add animations with Framer Motion
- Create unit tests with Vitest
- Add priority levels
- Implement task statistics dashboard

## 📖 Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [@hello-pangea/dnd Documentation](https://github.com/hello-pangea/dnd)

## 🤝 Contributing

This is a learning project. Feel free to fork and experiment with additional features.

## 📄 License

This project is open source and available for educational purposes.

---

**Note**: This project was created as part of a React and TypeScript learning journey. The commented code in `model.ts` shows exploration of useReducer pattern as an alternative state management approach.