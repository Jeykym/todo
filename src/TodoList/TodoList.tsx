import { useState } from 'react';
import { Box, List } from '@mui/material';

import TodoItem from "../TodoItem/TodoItem"
import TodoItemType from "../TodoItem/types.d"
import Filter from '../Filter/Filter';


interface TodoListProps {
    todos: TodoItemType[]
    setTodos: any
}


const filterMap = new Map<string, any>();
filterMap.set('All', (todos: TodoItemType[]) => todos);
filterMap.set('Completed', (todos: TodoItemType[]): TodoItemType[] => todos.filter(
    (todo: TodoItemType) => todo.completed
));
filterMap.set('Pending', (todos: TodoItemType[]): TodoItemType[] => todos.filter(
    (todo: TodoItemType) => !todo.completed
));
filterMap.set('After due', (todos: TodoItemType[]): TodoItemType[] => todos.filter(
    (todo: TodoItemType) => todo.due <= new Date()
));
filterMap.set('Before due', (todos: TodoItemType[]): TodoItemType[] => todos.filter(
    (todo: TodoItemType) => todo.due > new Date()
));

const TodoList = (props: TodoListProps) => {
    const [filter, setFilter] = useState<string>('All');

    const deleteItem = (id: number) => {
        props.setTodos((prevState: TodoItemType[]) => (
            prevState.filter((todo: TodoItemType) => todo.id !== id)
        ));
    }

    return (
        <Box sx={{
            width: {xs: '100%', sm: '60%', md: '40%'},
            display: 'flex',
            flexDirection: 'column',
        }}>
            <Filter filter={filter} setFilter={setFilter} />
            <List>
                {filterMap.get(filter)(props.todos).map((todo: TodoItemType) => (
                    <TodoItem data={todo} deleteItem={deleteItem} setTodos={props.setTodos} />
                ))}
            </List>
        </Box>
    );
}


export default TodoList;