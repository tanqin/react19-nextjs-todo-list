export interface ITodo {
  id: number
  text: string
  completed: boolean
}
export type TTodoAction = { type: 'ADD_TODO'; text: string } | { type: 'TOGGLE_TODO'; id: number } | { type: 'REMOVE_TODO'; id: number }

export const todoReducer = (state: ITodo[], action: TTodoAction) => {
  let newState: ITodo[]
  switch (action.type) {
    case 'ADD_TODO':
      newState = [...state, { id: Date.now(), text: action.text, completed: false }]
      break
    case 'TOGGLE_TODO':
      newState = state.map(todo => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo))
      break
    case 'REMOVE_TODO':
      newState = state.filter(item => item.id !== action.id)
      break
    default:
      newState = state
      break
  }
  localStorage.setItem('todos', JSON.stringify(newState))
  return newState
}
