'use client'
import { TodoContext } from './TodoContext'
import { useTodos } from './hooks/useTodos'
import AddTodo from './components/AddTodo'
import dynamic from 'next/dynamic'
import Image from 'next/image'

const NoSSRTodoList = dynamic(() => import('./components/TodoList'), { ssr: false })

export default function Home() {
  const todoHook = useTodos()
  return (
    <TodoContext.Provider value={todoHook}>
      <div className='absolute left-1/2 -translate-x-1/2 w-full sm:max-w-sm flex flex-col items-center'>
        <h1 className='flex font-bold text-3xl m-2.5'>
          <Image className='mr-1' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/todo.svg`} alt='todo' width={20} height={20} /> Todo List
        </h1>
        <AddTodo />
        <NoSSRTodoList />
      </div>
    </TodoContext.Provider>
  )
}
