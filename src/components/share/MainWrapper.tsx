const MainWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-between">{children}</div>
  )
}

export default MainWrapper
