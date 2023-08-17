import { FC, useState, ChangeEvent, MouseEvent } from 'react'
import './InputNumber.css'

interface Props {
  value: number
  onIncrement: (n: number) => void
  onDecrement: (n: number) => void
}

const InputNumber: FC<Props> = ({ value, onIncrement, onDecrement }) => {
  const [count, setCount] = useState<number>(value)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCount(Number(event.target.value))
  }

  const handleDecrement = (_event: MouseEvent<HTMLButtonElement>) => {
    if (count > 0) {
      onDecrement(count - 1)
      setCount(count - 1)
    }
  }

  const handleIncrement = () => {
    if (count < 10) {
      onIncrement(count + 1)
      setCount(count + 1)
    }
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
