import { useState } from 'react';

import TodoItem from "../TodoItem/TodoItem"
import TodoItemType from "../TodoItem/types.d"
import AddTodo from '../AddTodo/AddTodo';


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


const TodoList = () => {
    const [todos, setTodos] = useState<TodoItemType[]>(todoDefault);

    return (
        <div>
            <ul>
                {todos.map(todo => (
                    <TodoItem {...todo} />
                ))}
            </ul>
            <AddTodo todos={todos} setTodos={setTodos}/>
        </div>
    );
}


export default TodoList;