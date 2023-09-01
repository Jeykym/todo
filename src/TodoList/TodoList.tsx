import { useState } from 'react';

import TodoItem from "../TodoItem/TodoItem"
import TodoItemType from "../TodoItem/types.d"
import AddTodo from '../AddTodo/AddTodo';
import TodoForm from '../TodoForm.tsx/TodoForm';

import './TodoList.css';


const TodoList = () => {
    const [id, setId] = useState(0);
    const [todos, setTodos] = useState<TodoItemType[]>([]);
    const [addModal, setAddModal] = useState(false);


    const getId = (): number => {
        const currentId = id;
        setId((prevState: number) => (prevState + 1));
        return currentId
    }


    const deleteItem = (id: number) => {
        // todos.filter((todo: TodoItemType) => todo.id !== id)
        setTodos((prevState: TodoItemType[]) => (
            prevState.filter((todo: TodoItemType) => todo.id !== id)
        ));
    }

    if (addModal) {
        return (
            <TodoForm getId={getId} setTodos={setTodos} setAddModal={setAddModal}/>
        );
    }

    return (
        <div className='todoList'>
            <AddTodo setAddModal={setAddModal} />
            <ul>
                {todos.map(todo => (
                    <TodoItem data={todo} deleteItem={deleteItem} setTodos={setTodos} />
                ))}
            </ul>
        </div>
    );
}


export default TodoList;