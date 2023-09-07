import { ChangeEvent } from 'react';
import { Box, Button, Checkbox, ListItem, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


import TodoItemType from "./types.d";


interface TodoItemProps {
    data: TodoItemType,
    deleteItem: any
    setTodos: any
}


const optionsDate: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
};
const optionsTime: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit'
};


const TodoItem = (props: TodoItemProps) => {
    const opacity = props.data.completed ? '50%' : '100%';

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.setTodos((prevState: TodoItemType[]) => (
            prevState.map((todo: TodoItemType) => {
                if (todo.id === props.data.id) {
                    return {
                        ...todo,
                        completed: !props.data.completed
                    }
                };

                return todo;
            })
        ));
    }

    return (
        <ListItem sx={{
            display: 'flex',
            justifyContent: 'space-between',
        }}>
            <Box sx={{
                display: 'flex'
            }}>
                <Checkbox 
                    sx={{marginRight: "1rem"}}
                    id="completed"
                    checked={props.data.completed}
                    onChange={handleOnChange} />
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginRight: '1rem',
                    opacity: opacity
                }}>
                    <Typography variant='h5'>
                        Due
                    </Typography>
                    <Box component='span'>
                        {props.data.due.toLocaleDateString('en-GB', optionsDate)}
                    </Box>
                    <Box component='span'>
                        {props.data.due.toLocaleTimeString('en-GB', optionsTime)}
                    </Box>
                </Box>
                <Box sx={{opacity: opacity}}>
                    <Typography variant='h5' sx={{margin: '0'}}>
                        {props.data.title}
                    </Typography>
                    <Typography paragraph={true}>
                        {props.data.description}
                    </Typography>
                </Box>
            </Box>
            <Button
                variant="contained"
                color="error"
                onClick={() => {props.deleteItem(props.data.id)}}
            >
                <DeleteIcon /> Delete
            </Button>
        </ListItem>
    );
}


export default TodoItem;