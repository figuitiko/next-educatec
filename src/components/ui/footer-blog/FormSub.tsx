import { BTN_TEXT, BUTTON_PLACEHOLDER } from './config'

const FormSub = () => {
  return (
    <form
      action=""
      className="flex flex-col md:flex-row text-white flex-1 justify-start items-center gap-12 max-w-[600px] w-full"
    >
      <input
        type="email"
        placeholder={BUTTON_PLACEHOLDER}
        className="bg-primary p-4 w-auto max-w-[323px]  border-2  border-sixth  text-white"
      />
      <button type="button" className="bg-secondary px-12 py-4">
        {BTN_TEXT}
      </button>
    </form>
  )
}

export default FormSub
