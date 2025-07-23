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
      <div className='flex flex-col items-center absolute left-1/2 -translate-x-1/2 w-full sm:w-sm md:w-md lg:w-lg h-full p-2.5 overflow-hidden'>
        <h1 className='flex font-bold text-3xl mb-2.5'>
          <Image className='mr-1' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/todo.svg`} alt='todo' width={20} height={20} /> Todo List
        </h1>
        <AddTodo />
        <NoSSRTodoList />
      </div>
    </TodoContext.Provider>
  )
}
