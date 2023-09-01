import { ChangeEvent } from 'react';

import TodoItemType from "./types.d";

import './TodoItem.css';


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
        <div className='todoItem'>
            <div className='todoItem__info'>
                <h4 className='todoItem__title'>{props.data.title}</h4>
                <p className='todoItem__description'>{props.data.description}</p>
            </div>
            <input id="completed" type="checkBox" onChange={handleOnChange}></input>
            <button onClick={() => {props.deleteItem(props.data.id)}}>Delete</button>
        </div>
    );
}


export default TodoItem;