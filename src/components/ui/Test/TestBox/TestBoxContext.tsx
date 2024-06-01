import { createContext, useContext } from 'react'
type TestBoxContextType = {
  page: number
  score: number[] | []
  setPage: (page: number) => void
  setScore: (score: number[]) => void
  result: number | null
  setResult: (results: number) => void
}

export const TestBoxContext = createContext<TestBoxContextType | null>(null)
export const useTestBoxContext = () => {
  const context = useContext(TestBoxContext)
  if (!context) {
    throw new Error('useTestBoxContext must be used within a TestBoxContext')
  }
  return context
}
