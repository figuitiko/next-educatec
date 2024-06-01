import FormQuestions from '../FormQuestions/FormQuestions'
import { useTestBoxContext } from './TestBoxContext'
import { Progress } from '@/components/ui/progress'
import { TEST_CONFIG } from './config'
import { Text } from '@/components/share/text/Text'
import { cn } from '@/lib/utils'
import { calculatePercentage } from '@/utils/math.util'

const TestQuestion = () => {
  const { page } = useTestBoxContext()
  const percentage = calculatePercentage(
    page,
    Object.values(TEST_CONFIG).length - 1 * 2
  )
  return (
    <div
      key={page}
      className="p-16 relative  w-[400px] h-[400px] md:w-[400px] md:h-[400px] lg:w-[800px] lg:h-[800px] flex items-center justify-center flex-col gap-4 z-30 animate-fade-in"
    >
      <div className="absolute w-[40%] right-0 top-0 flex flex-col ">
        <div>
          <Text
            as="h3"
            className={cn(
              'text-white text-2xl font-bold',
              {
                'text-primary': page % 2 === 0
              },
              {
                'text-white': page % 2 !== 0
              }
            )}
          >
            Preguntas {page * 2} de {Object.values(TEST_CONFIG).length * 2}
          </Text>
        </div>
        <Progress value={percentage} className="border-2 border-secondary" />
      </div>
      <FormQuestions />
    </div>
  )
}

export default TestQuestion
