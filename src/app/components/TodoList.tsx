import React from 'react'
import { useTodoContext } from '../hooks/useTodoContext'

export default function TodoList() {
  // 一行代码，轻松获取全局状态和方法
  const { todos, toggleTodo, removeTodo } = useTodoContext()
  return (
    <ul className='w-full px-3.5 text-lg'>
      {todos.map(todo => (
        <li className='cursor-pointer' key={todo.id}>
          <input type='checkbox' checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
          <span
            className='inline-block max-w-9/10 px-1 whitespace-nowrap overflow-hidden text-ellipsis align-middle'
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            title={todo.text}
            onClick={() => toggleTodo(todo.id)}>
            {todo.text}
          </span>
          <button onClick={() => removeTodo(todo.id)}>✖</button>
        </li>
      ))}
    </ul>
  )
}
