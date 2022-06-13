
import { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { useDispatch } from 'react-redux';

import {addTodo} from './store/todoSlice'

function App() {
	const [text, setText] = useState('');
	const dispatch = useDispatch()
	
	const addTask = () =>{
		 dispatch(addTodo({text}))
		 setText('')
		}
	
		

	const toggleTodoComplete = (todoId) => {
		// setTodos(
		// 	todos.map(todo => {
		// 		if (todo.id !== todoId) return todo;

		// 		return {
		// 			...todo,
		// 			completed: !todo.completed,
		// 		}
		// 	})
		// )
	}

	const removeTodo = (todoId) => {
		// setTodos(todos.filter(todo => todo.id !== todoId))
	}

	return (
		<div className="App">

			<InputField text={text}
				handleInput={setText}
				handleSubmit={addTask}
				 />

			<TodoList
	
				toggleTodoComplete={toggleTodoComplete}
				removeTodo={removeTodo}
			/>

		</div>

	);
}

export default App;
