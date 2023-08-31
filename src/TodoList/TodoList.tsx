import TodoItem from "../TodoItem/TodoItem"
import TodoItemType from "../TodoItem/types.d"


interface TodoListProps {
    todos: TodoItemType[]
}


const TodoList = (props: TodoListProps) => {
    return (
        <ul>
            {props.todos.map(todo => (
                <TodoItem {...todo} />
            ))}
        </ul>
    );
}


export default TodoList;