import { createContext } from 'react'
import type { TUseTodosReturnType } from './hooks/useTodos'

export const TodoContext = createContext<TUseTodosReturnType | null>(null)
