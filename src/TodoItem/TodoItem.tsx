import TodoItemType from "./types.d";


const TodoItem = ({id, title, description, completed}: TodoItemType) => {
    return (
        <div>
            <span><strong>Title: </strong>{title}</span>
            <br></br>
            <span><strong>Description: </strong>{description}</span>
            <br></br>
            <strong>{completed ? 'Completed' : 'Pending'}</strong>
        </div>
    );
}


export default TodoItem;