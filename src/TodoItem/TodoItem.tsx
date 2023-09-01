import { ChangeEvent } from 'react';

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
        <div>
            <span><strong>Title: </strong>{props.data.title}</span>
            <br></br>
            <span><strong>Description: </strong>{props.data.description}</span>
            <br></br>
            <strong>{props.data.completed ? 'Completed' : 'Pending'}</strong>
            <br></br>
            <button onClick={() => {props.deleteItem(props.data.id)}}>Delete</button>
            <input id="completed" type="checkBox" onChange={handleOnChange}></input>
        </div>
    );
}


export default TodoItem;