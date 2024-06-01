import { Text } from '@/components/share/text/Text'
import RadioQuestion from './RadioQuestion'
import { cn } from '@/lib/utils'
import { useTestBoxContext } from './TestBoxContext'
import { TEST_CONFIG } from './config'

const QuestionBox = () => {
  const { page, setScore, score } = useTestBoxContext()
  const handleScore = (value: string) => {
    if (value === 'yes') {
      setScore([...score, 3])
      return
    }
    setScore([...score, 1])
  }
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-4">
        <span className="flex items-center justify-center rounded-full bg-secondary text-white h-7 w-7">
          {TEST_CONFIG[page].question1.questionNumber}
        </span>
        <Text
          as="h3"
          className={cn('text-xl font-medium', {
            'text-primary': page % 2 === 0,
            'text-white': page % 2 !== 0
          })}
        >
          {TEST_CONFIG[page].question1.text}
        </Text>
      </div>
      <div className="flex flex-col">
        <RadioQuestion handleOnchange={handleScore} />
      </div>
    </div>
  )
}

export default QuestionBox
