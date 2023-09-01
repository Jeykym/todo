import { useState } from 'react';

import TodoItem from "../TodoItem/TodoItem"
import TodoItemType from "../TodoItem/types.d"
import AddTodo from '../AddTodo/AddTodo';
import TodoForm from '../TodoForm.tsx/TodoForm';


const TodoList = () => {
    const [id, setId] = useState(0);
    const [todos, setTodos] = useState<TodoItemType[]>([]);
    const [addModal, setAddModal] = useState(false);


    const getId = (): number => {
        const currentId = id;
        setId((prevState: number) => (prevState + 1));
        return currentId
    }

    if (addModal) {
        return (
            <TodoForm getId={getId} setTodos={setTodos} setAddModal={setAddModal}/>
        );
    }

    return (
        <div>
            <ul>
                {todos.map(todo => (
                    <TodoItem {...todo} />
                ))}
            </ul>
            <AddTodo setAddModal={setAddModal} />
        </div>
    );
}


export default TodoList;