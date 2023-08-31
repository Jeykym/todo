import { useState } from 'react';

import Header from "../Header/Header";
import TodoItemType from "../TodoItem/types.d";
import TodoList from "../TodoList/TodoList";


const todoDefault: TodoItemType[] = [
    {
        id: 1,
        title: 'Todo Item',
        description: 'This is a todo item',
        completed: false
    },
    {
        id: 2,
        title: 'Another Todo Item',
        description: 'This is another todo item',
        completed: true
    }
];


const App = () => {
    const [todos, setTodos] = useState<TodoItemType[]>(todoDefault);

    return (
        <div>
            <Header />
            <TodoList todos={todos} />
        </div>
    );
}

export default App;