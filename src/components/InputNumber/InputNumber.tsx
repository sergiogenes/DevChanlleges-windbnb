import { FC, useState, ChangeEvent, MouseEvent } from 'react'
import './InputNumber.css'

const InputNumber: FC = () => {
  const [count, setCount] = useState<number>(0)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCount(Number(event.target.value))
  }

  const handleDecrement = (event: MouseEvent<HTMLButtonElement>) => {
    if (count > 0) setCount(count - 1)
  }

  const handleIncrement = () => {
    if (count < 10) setCount(count + 1)
  }

  return (
    <div className='inputNumber-container'>
      <button onClick={handleDecrement}>
        <span className='material-symbols-outlined'>remove</span>
      </button>
      <input
        type='number'
        min={'0'}
        max={'10'}
        value={count}
        onChange={handleChange}
      />
      <button onClick={handleIncrement}>
        <span className='material-symbols-outlined'>add</span>
      </button>
    </div>
  )
}

export default InputNumber
