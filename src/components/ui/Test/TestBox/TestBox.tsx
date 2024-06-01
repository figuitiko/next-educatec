'use client'
import { cn } from '@/utils/style.util'
import { useState } from 'react'
import TestHeading from './TestHeading'
import TestQuestion from './TestQuestion'
import { TestBoxContext } from './TestBoxContext'
import TestResult from './TestResult'

const TestBox = () => {
  const [page, setPage] = useState(0)
  const [score, setScore] = useState<number[]>([])
  const [result, setResult] = useState<number | null>(null)
  const getScreen = () => {
    if (page === 0 && !result && result !== 0) {
      return <TestHeading />
    } else if (page > 0 && !result && result !== 0) {
      return <TestQuestion />
    } else {
      return <TestResult />
    }
  }
  return (
    <TestBoxContext.Provider
      value={{ page, score, setPage, setScore, result, setResult }}
    >
      <div
        className={cn(
          {
            'bg-hero-pattern bg-cover bg-center bg-no-repeat opacity-90':
              page === 0 && !result
          },
          {
            'bg-question-pattern cover':
              page % 2 === 0 && page > 0 && !result && result !== 0
          },
          {
            'bg-question-pattern-secondary bg-cover':
              page % 4 === 0 && page > 0 && !result && result !== 0
          },
          {
            'bg-primary': page % 2 !== 0 && page > 0 && !result && result !== 0
          },
          {
            'bg-result-1': result === 0
          },
          {
            'bg-result-2': result !== null && result > 0 && result <= 30
          },
          {
            'bg-result-3': result !== null && result > 30 && result <= 60
          },
          {
            'bg-result-4': result !== null && result >= 60
          },
          'flex flex-col justify-center items-center gap-4 p-4 md:p-12 relative bg-cover bg-center bg-no-repeat'
        )}
      >
        {page !== 0 && page % 2 !== 0 && !result && result !== 0 && (
          <div className="absolute top-1/2 left-1/2  translate-x-[-50%] translate-y-[-50%] rounded-full w-[600px] h-[600px] z-10  bg-blue-600/15"></div>
        )}
        {getScreen()}
      </div>
    </TestBoxContext.Provider>
  )
}

export default TestBox
