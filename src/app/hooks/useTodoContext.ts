import { useContext } from 'react'
import { TodoContext } from '../TodoContext'

// 这是一个最佳实践，将 useContext 的调用也封装起来
export function useTodoContext() {
  // 在此处进行非空断言，避免每次使用都要进行非空断言
  return useContext(TodoContext)!
}
