const RadioQuestion = ({
  handleOnchange
}: {
  handleOnchange: (value: string) => void
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-4">
        <input
          type="radio"
          name="question1"
          id="yes"
          value="yes"
          onChange={(e) => {
            handleOnchange(e.target.value)
          }}
        />
        <label htmlFor="yes">Yes</label>
      </div>
      <div className="flex gap-4">
        <input
          type="radio"
          name="question2"
          id="no"
          value="no"
          onChange={(e) => {
            handleOnchange(e.target.value)
          }}
        />
        <label htmlFor="no">No</label>
      </div>
    </div>
  )
}

export default RadioQuestion
