import { FC, useState, ChangeEvent, MouseEvent } from 'react'
import './InputNumber.css'

const InputNumber: FC = () => {
  const [count, setCount] = useState<number>(0)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCount(Number(event.target.value))
  }

  const handleDecrement = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(event.target)
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <button onClick={handleDecrement}>-</button>
      <input
        type='number'
        min={'0'}
        max={'10'}
        style={{ textAlign: 'center' }}
        value={count}
        onChange={handleChange}
      />
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default InputNumber
