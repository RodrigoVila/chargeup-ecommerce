type CounterProps = {
  count: number
  subtractOne: () => void
  addOne: () => void
  color?: string
}

export const Counter = ({ count, subtractOne, addOne, color = 'black' }: CounterProps) => {
  const operClass = 'mr-1 text-2xl leading-none cursor-pointer  p-2'
  return (
    <div className={`my-1 flex items-center border font-bold border-${color} rounded-md`}>
      <button className={`${operClass}`} onClick={subtractOne}>
        -
      </button>
      <div className='mx-2 text-xl leading-none '>{count}</div>
      <button className={`${operClass}`} onClick={addOne}>
        +
      </button>
    </div>
  )
}
