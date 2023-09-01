import { useState } from 'react';
import { List } from '@mui/material';

import TodoItem from "../TodoItem/TodoItem"
import TodoItemType from "../TodoItem/types.d"


interface TodoListProps {
    todos: TodoItemType[]
    setTodos: any
}


const TodoList = (props: TodoListProps) => {
    const deleteItem = (id: number) => {
        props.setTodos((prevState: TodoItemType[]) => (
            prevState.filter((todo: TodoItemType) => todo.id !== id)
        ));
    }

    return (
        <List sx={{
            width: "30%"
        }}>
            {props.todos.map(todo => (
                <TodoItem data={todo} deleteItem={deleteItem} setTodos={props.setTodos} />
            ))}
        </List>
    );
}


export default TodoList;