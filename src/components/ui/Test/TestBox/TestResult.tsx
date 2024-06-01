import { Text } from '@/components/share/text/Text'
import { useTestBoxContext } from './TestBoxContext'

const TestResult = () => {
  const { result } = useTestBoxContext()
  // console.log(result)
  if (result === null) {
    return null
  }
  let textResultValue = 'ESTAS libre de violencia'
  if (result > 10 && result <= 30) {
    textResultValue = '¡TEN CUIDADO! LA VIOLENCIA AUMENTARÁ'
  } else if (result > 30 && result <= 60) {
    textResultValue = '¡REACCIONA! NO TE DEJES DESTRUIR'
  } else if (result >= 60) {
    textResultValue = 'NECESITAS AYUDA PROFESIONAL'
  }
  return (
    <div className="flex p-16 flex-col gap-8 items-center justify-center aspect-square">
      <div className="flex flex-col">
        <Text as="h1" className="text-[96px] font-bold text-white uppercase">
          {textResultValue}
        </Text>
      </div>
    </div>
  )
}

export default TestResult
