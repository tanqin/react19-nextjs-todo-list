import { useReducer } from 'react'
import { todoReducer, type ITodo } from '../reducers/todoReducer'

export type TUseTodosReturnType = ReturnType<typeof useTodos>

export const useTodos = (initial: ITodo[] = []) => {
  const [todos, dispatch] = useReducer(todoReducer, initial)

  const addTodo = (text: string) => dispatch({ type: 'ADD_TODO', text })
  const toggleTodo = (id: number) => dispatch({ type: 'TOGGLE_TODO', id })
  const removeTodo = (id: number) => dispatch({ type: 'REMOVE_TODO', id })
  return {
    todos,
    addTodo,
    toggleTodo,
    removeTodo
  }
}
