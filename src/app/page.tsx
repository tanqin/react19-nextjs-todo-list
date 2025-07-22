'use client'
import { TodoContext } from './TodoContext'
import { useTodos } from './hooks/useTodos'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

export default function Home() {
  const todoHook = useTodos()

  return (
    <TodoContext.Provider value={todoHook}>
      <div className='absolute left-1/2 -translate-x-1/2 w-full sm:max-w-sm flex flex-col items-center'>
        <h1 className='font-bold text-3xl m-2.5'>Todo List</h1>
        <AddTodo />
        <TodoList />
      </div>
    </TodoContext.Provider>
  )
}
