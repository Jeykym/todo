import { ChangeEvent, FormEvent, useState } from 'react';
import TodoItemType from '../TodoItem/types.d';


interface TodoFormProps {
    getId: any,
    setTodos: any,
    setAddModal: any
}


interface FormData {
    title: string,
    description: string
}


const TodoForm = (props: TodoFormProps) => {
    const [formData, setFormData] = useState<FormData>({title: '', description: ''})

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    }


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.setTodos((prevState: TodoItemType[]) => (
            [
                ...prevState,
                {
                    id: props.getId(),
                    ...formData,
                    completed: false
                }
            ]
        ));
        props.setAddModal(false);
    }
    

    return (
        <form id="addTodoItemForm" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input id="title" type="text" onChange={handleChange}></input>
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input id="description" type="text" onChange={handleChange}></input>
            </div>
            <button type="submit">Create Todo Item</button>
        </form>
    );
}


export default TodoForm;