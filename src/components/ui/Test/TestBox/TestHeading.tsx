import Button from '@/components/share/button/Button'
import { Text } from '@/components/share/text/Text'
import Image from 'next/image'
import { DialogClose } from '@/components/ui/dialog'
import { TEST_HEADING } from './config'
import { useTestBoxContext } from './TestBoxContext'

const TestHeading = () => {
  const { page, setPage } = useTestBoxContext()
  return (
    <div className="p-16  rounded-full bg-[#103558]/50 w-[400px] h-[400px] md:w-[400px] md:h-[400px] lg:w-[800px] lg:h-[800px] flex items-center justify-center flex-col gap-4">
      <picture>
        <Image
          src="/images/logo-footer.webp"
          alt="hero"
          width={400}
          height={400}
        />
      </picture>
      <Text
        as="h1"
        className="heading-main text-white  text-[72px]  tracking-[-1px] text-center leading-[1.1] "
      >
        {TEST_HEADING.heading}
      </Text>
      <Text as="p" className="text-xl font-medium text-white text-center">
        {TEST_HEADING.subHeading}
      </Text>
      <Button
        type="button"
        variant="secondary"
        handleClick={() => {
          setPage(page + 1)
        }}
      >
        {<Text className="text-white uppercase">{TEST_HEADING.btnText}</Text>}
      </Button>
      <DialogClose
        asChild
        className="text-white font-bold py-4 px-8 rounded justify-start w-fit bg-primary hover:bg-purple-500 cursor-pointer"
      >
        <Text className="text-white uppercase">
          {TEST_HEADING.btnCloseText}
        </Text>
      </DialogClose>
    </div>
  )
}

export default TestHeading
