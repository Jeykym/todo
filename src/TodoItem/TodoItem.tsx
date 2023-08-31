interface TodoItemProps {
    id: number,
    title: string,
    description: string,
    completed: boolean
}


const TodoItem = ({id, title, description, completed}: TodoItemProps) => {
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