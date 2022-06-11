
import { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';

function App() {
	const [todos, setTodos] = useState([{ id: '2022-06-11T13:36:56.870Z', text: '555', completed: false }]);
	const [text, setText] = useState('');

	const addTodo = () => {
		if (text.trim().length) {
			setTodos([...todos,
			{
				id: new Date().toISOString(),
				text: text,
				completed: false,
			}
			])
			console.log(todos);
			setText('')
		}
	}

	const toggleTodoComplete = (todoId) => {
		setTodos(
			todos.map(todo => {
				if (todo.id !== todoId) return todo;

				return {
					...todo,
					completed: !todo.completed,
				}
			})
		)
	}

	const removeTodo = (todoId) => {
		setTodos(todos.filter(todo => todo.id !== todoId))
	}

	return (
		<div className="App">

			<InputField text={text}
				handleInput={setText}
				handleSubmit={addTodo} />

			<TodoList
				todos={todos}
				toggleTodoComplete={toggleTodoComplete}
				removeTodo={removeTodo}
			/>

		</div>

	);
}

export default App;
