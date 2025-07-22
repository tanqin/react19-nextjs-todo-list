import { useEffect, useRef, type FormEvent } from 'react'
import { useTodoContext } from '../hooks/useTodoContext'

export default function AddTodo() {
  const { addTodo } = useTodoContext()
  const todoTextInputRef = useRef<HTMLInputElement>(null)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const todoText = (formData.get('todoText') as string).trim()

    if (todoText) {
      addTodo(todoText)
      todoTextInputRef.current!.value = ''
    }
  }

  useEffect(() => {
    todoTextInputRef.current!.focus()
  }, [])

  return (
    <form className='mb-2.5' onSubmit={handleSubmit}>
      <input className='pl-0.25 border focus:outline-none focus:border' type='text' name='todoText' placeholder='新增 Todo' ref={todoTextInputRef} />
      <button className='border ml-2 px-1' type='submit'>
        提交
      </button>
    </form>
  )
}
