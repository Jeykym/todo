import TodoItemType from "./types.d";


interface TodoItemProps {
    data: TodoItemType,
    deleteItem: any
}


const TodoItem = (props: TodoItemProps) => {
    return (
        <div>
            <span><strong>Title: </strong>{props.data.title}</span>
            <br></br>
            <span><strong>Description: </strong>{props.data.description}</span>
            <br></br>
            <strong>{props.data.completed ? 'Completed' : 'Pending'}</strong>
            <br></br>
            <button onClick={() => {props.deleteItem(props.data.id)}}>Delete</button>
        </div>
    );
}


export default TodoItem;