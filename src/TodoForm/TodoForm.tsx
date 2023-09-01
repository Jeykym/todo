import { useState } from 'react';
import {
    Box,
    Button, 
    DialogContent, 
    FormGroup, 
    TextField,
    Typography
} from '@mui/material';

import TodoItemType from '../TodoItem/types.d';


interface TodoFormProps {
    getId: any,
    setTodos: any,
    handleClose: any
}


const TodoForm = (props: TodoFormProps) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')

    const handleSubmit = () => {
        props.setTodos((prevState: TodoItemType[]) => (
            [
                ...prevState,
                {
                    id: props.getId(),
                    title: title,
                    description: description,
                    completed: false
                }
            ]
        ));
        props.handleClose();
    }
    

    return (
        <DialogContent>
            <Typography variant='h3'>
                Add Todo
            </Typography>
        <FormGroup>
            <TextField
                label="Title"
                variant="outlined"
                fullWidth
                margin="normal"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
                label="Description"
                variant="outlined"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
        </FormGroup>
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <Button onClick={handleSubmit} variant='contained'>Submit</Button>
            <Button onClick={props.handleClose} variant='contained' color='error'>Cancel</Button>
        </Box>
        </DialogContent>
    );
}


export default TodoForm;