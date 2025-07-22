import { createContext } from 'react'
import { TUseTodosReturnType } from './hooks/useTodos'

export const TodoContext = createContext<TUseTodosReturnType | null>(null)
