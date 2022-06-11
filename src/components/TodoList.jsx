import React from 'react'
import TodoItem from './TodoItem';

function TodoList({toggleTodoComplete, removeTodo,todos}) {
  return (
	 <ul>
		  {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
			 toggleTodoComplete ={toggleTodoComplete}
			 removeTodo={removeTodo}
        />
      ))}
	 </ul>
  )
}

export default TodoList
