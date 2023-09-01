import { useState } from 'react';
import { Box, Button } from '@mui/material';
import { Add } from '@mui/icons-material';

import Header from "../Header/Header";
import TodoList from "../TodoList/TodoList";

import TodoItemType from '../TodoItem/types.d';

const testData: TodoItemType[] = [
    {
        id: 1,
        title: 'Title 1',
        description: 'desciption 1',
        completed: false
    },
    {
        id: 2,
        title: 'Title 2',
        description: 'desciption 2',
        completed: true
    }
];


const App = () => {
    const [id, setId] = useState(0);
    const [todos, setTodos] = useState<TodoItemType[]>(testData);
    const [addModal, setAddModal] = useState(false);

    const getId = (): number => {
        const currentId = id;
        setId((prevState: number) => (prevState + 1));
        return currentId
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Header />
            <Button
                sx={{marginBottom: '2rem'}}
                variant="contained"
                size='large'
                onClick={() => setAddModal(true)}>
                <Add /> Add
            </Button>
            <TodoList todos={todos} setTodos={setTodos}/>
        </Box>
    );
}

export default App;