import { ChangeEvent } from 'react';
import { Box, Button, Checkbox, ListItem, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


import TodoItemType from "./types.d";


interface TodoItemProps {
    data: TodoItemType,
    deleteItem: any
    setTodos: any
}


const TodoItem = (props: TodoItemProps) => {
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
                <Box sx={{opacity: props.data.completed ? '50%' : '100%'}}>
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