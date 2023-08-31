import Header from "../Header/Header";
import TodoItem from "../TodoItem/TodoItem";


const todos = [
    {
        id: 1,
        title: 'Todo Item',
        description: 'This is a todo item',
        completed: false
    }
];


const App = () => {
    return (
        <div>
            <Header />
            <TodoItem {...todos[0]} />
        </div>
    );
}

export default App;