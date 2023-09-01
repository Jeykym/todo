import { useState } from 'react';

interface AddTodoProps {
    setAddModal: any
}


const AddTodo = (props: AddTodoProps) => {
    // const addTodo = () => {
    //     const newTodo: TodoItemType = {
    //         id: id,
    //         title: `Added todo ${id}`,
    //         description: 'This todo was added',
    //         completed: Math.random() >= 0.5 ? true : false
    //     };

    //     props.setTodos([...props.todos, newTodo], );
    //     setId(id + 1);
    // }

    return (
        <button onClick={() => {props.setAddModal(true)}}>Add Todo</button>
    );
}


export default AddTodo;