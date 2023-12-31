import { useState } from 'react';
import { Box, Button, Dialog } from '@mui/material';
import { Add } from '@mui/icons-material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import Header from "../Header/Header";
import TodoList from "../TodoList/TodoList";
import TodoForm from '../TodoForm/TodoForm';

import TodoItemType from '../TodoItem/types.d';

const testData: TodoItemType[] = [
    {
        id: 1,
        title: 'Title 1',
        description: 'description 1',
        due: new Date('2023-08-11T09:00:00'),
        completed: false
    },
    {
        id: 2,
        title: 'Title 2',
        description: 'description 2',
        due: new Date('2023-06-11T11:35:00'),
        completed: true
    }
];


const App = () => {
    const [id, setId] = useState(testData.length + 1);
    const [todos, setTodos] = useState<TodoItemType[]>(testData);
    const [openForm, setOpenForm] = useState(false);

    const getId = (): number => {
        const currentId = id;
        setId((prevState: number) => (prevState + 1));
        return currentId;
    }

    const handleClickAdd = () => {
        setOpenForm(true);
    }

    const handleClose = () => {
        setOpenForm(false);
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
                onClick={handleClickAdd}>
                <Add /> Add
            </Button>
            <Dialog open={openForm} onClose={handleClose}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TodoForm getId={getId} setTodos={setTodos} handleClose={handleClose}/>
                </LocalizationProvider>
            </Dialog>
            <TodoList todos={todos} setTodos={setTodos}/>
        </Box>
    );
}

export default App;