'use client'
import Button from '@/components/share/button/Button'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { useTestBoxContext } from '../TestBox/TestBoxContext'
import { TEST_CONFIG } from '../TestBox/config'
import { cn } from '@/lib/utils'
import { calculatePercentage } from '@/utils/math.util'
type FormValues = {
  question1: string
  question2: string
}

const FormQuestions = () => {
  const { setPage, page, score, setScore, setResult } = useTestBoxContext()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>()
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (errors.question1 ?? errors.question2) {
      return
    }

    const tempScore = [...score]
    Object.values(data).forEach((value) => {
      tempScore.push(value === 'yes' ? 1 : 0)
    })
    setScore(tempScore)
    if (TEST_CONFIG[page + 1]) {
      setPage(page + 1)
    } else {
      const totalScore = tempScore.reduce((acc, curr) => acc + curr, 0)
      const result = Math.floor(calculatePercentage(totalScore, 20))
      setResult(result)
    }
  }

  const handleBack = () => {
    if (page === 1) {
      return
    }
    setScore(score.slice(0, -2))
    setPage(page - 1)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8 w-full  justify-center relative  p-0 pb-0 pr-0 md:pb-20 md:pr-52"
    >
      <legend className="flex gap-4">
        <span className="flex items-center justify-center rounded-full bg-secondary text-white h-7 w-7 min-h-7 min-w-7">
          {TEST_CONFIG[page].question1.questionNumber}
        </span>
        <span
          className={cn(
            'flex items-center justify-center font-bold',
            {
              'text-primary': page % 2 === 0
            },
            {
              'text-white': page % 2 !== 0
            }
          )}
        >
          {TEST_CONFIG[page].question1.text}
        </span>
      </legend>
      <fieldset className="flex flex-col pl-2 gap-4">
        <label
          htmlFor="question1"
          className={cn(
            'flex gap-4 border-2 p-4 uppercase',
            {
              'text-primary border-secondary': page % 2 === 0
            },
            {
              'text-white': page % 2 !== 0
            }
          )}
        >
          <input
            type="radio"
            id="yes"
            value="yes"
            {...register('question1', { required: true })}
            aria-invalid={errors.question1 ? 'true' : 'false'}
          />
          Si
        </label>
        <label
          htmlFor="question2"
          className={cn(
            'flex gap-4 border-2 p-4 uppercase',
            {
              'text-primary border-secondary': page % 2 === 0
            },
            {
              'text-white': page % 2 !== 0
            }
          )}
        >
          <input
            type="radio"
            id="no"
            value="no"
            {...register('question1', { required: true })}
            aria-invalid={errors.question1 ? 'true' : 'false'}
          />
          No
        </label>
      </fieldset>
      <legend className="flex gap-4">
        <span className="flex items-center justify-center rounded-full bg-secondary text-white h-7 w-7 min-h-7 min-w-7">
          {TEST_CONFIG[page].question2.questionNumber}
        </span>
        <span
          className={cn(
            'flex items-center justify-center font-bold',
            {
              'text-primary': page % 2 === 0
            },
            {
              'text-white': page % 2 !== 0
            }
          )}
        >
          {TEST_CONFIG[page].question2.text}
        </span>
      </legend>
      <fieldset className="flex flex-col pl-2 gap-4">
        <label
          htmlFor="question1"
          className={cn(
            'flex gap-4 border-2 p-4 uppercase',
            {
              'text-primary border-secondary': page % 2 === 0
            },
            {
              'text-white': page % 2 !== 0
            }
          )}
        >
          <input
            type="radio"
            id="yes"
            value="yes"
            {...register('question2', { required: true })}
            aria-invalid={errors.question2 ? 'true' : 'false'}
          />
          Si
        </label>
        <label
          htmlFor="question2"
          className={cn(
            'flex gap-4 border-2 p-4 uppercase',
            {
              'text-primary border-secondary': page % 2 === 0
            },
            {
              'text-white': page % 2 !== 0
            }
          )}
        >
          <input
            type="radio"
            id="no"
            value="no"
            {...register('question2', { required: true })}
            aria-invalid={errors.question2 ? 'true' : 'false'}
          />
          No
        </label>
      </fieldset>
      <div className="flex gap-4 w-full  justify-end mt-0 md:mt-24 relative  md:absolute right-0 left-0 md:right-[-200px] md:bottom-[-100px]">
        <Button type="button" variant="primary" handleClick={handleBack}>
          Anterior
        </Button>
        <Button type="submit" variant="secondary" handleClick={() => null}>
          Siguiente
        </Button>
      </div>
    </form>
  )
}

export default FormQuestions
