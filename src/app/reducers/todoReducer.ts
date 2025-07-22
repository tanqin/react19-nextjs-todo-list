export interface ITodo {
  id: number
  text: string
  completed: boolean
}
export type TTodoAction = { type: 'ADD_TODO'; text: string } | { type: 'TOGGLE_TODO'; id: number } | { type: 'REMOVE_TODO'; id: number }

export const todoReducer = (state: ITodo[], action: TTodoAction) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Math.random(), text: action.text, completed: false }]
    case 'TOGGLE_TODO':
      return state.map(todo => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo))
    case 'REMOVE_TODO':
      const newState = state.filter(item => item.id !== action.id)
      return newState
    default:
      return state
  }
}
