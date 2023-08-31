import TodoItemType from "../TodoItem/types.d";


interface AddTodoProps {
    todos: TodoItemType[]
    setTodos: any
}


const AddTodo = (props: AddTodoProps) => {
    const addTodo = () => {
        const newTodo: TodoItemType = {
            id: 1,
            title: 'Added todo',
            description: 'This todo was added',
            completed: false
        };

        props.setTodos([...props.todos, newTodo], );
    }

    return (
        <button onClick={addTodo}>Add Todo</button>
    );
}


export default AddTodo;