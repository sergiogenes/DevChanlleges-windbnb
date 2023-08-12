import React, { useState } from 'react'

const DialogBox: React.FC<{
  children: JSX.Element
  isOpen: boolean
  onClose: () => void
}> = ({ children, isOpen, onClose }: React.PropsWithChildren<any>) => {
  if (!isOpen) return null

  return (
    <div
      style={{
        background: 'white',
        padding: '10px',
        top: '10%',
        left: '10%',
      }}
    >
      {children}
      <button onClick={onClose}>Cerrar</button>
    </div>
  )
}

const PassengerSelect: React.FC = () => {
  const [passengerCount, setPassengerCount] = useState(0)
  const [adultCount, setAdultCount] = useState(0)
  const [childCount, setChildCount] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const handleAdultChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAdultCount(Number(event.target.value as number))
  }

  const handleChildChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setChildCount(Number(event.target.value as number))
  }

  const handlePassengerChange = (
    event: React.ChangeEvent<{ value: unknown }>,
  ) => {
    setPassengerCount(Number(event.target.value as number))
    setIsOpen(true)
    setAdultCount(0)
    setChildCount(0)
  }

  const handleDialogClose = () => {
    console.log('adultValue ==>>', adultCount)
    console.log('childValue ==>>', childCount)
    console.log('passanger ==>>', passengerCount)
    console.log('adultCount + childCount', adultCount + childCount)
    if (adultCount + childCount === passengerCount) {
      setIsOpen(false)
    } else {
      alert(
        'La suma de pasajeros adultos y menores debe ser igual al total de pasajeros',
      )
    }
  }

  return (
    <div>
      <select value={passengerCount} onChange={handlePassengerChange}>
        {[...Array(10)].map((_, i) => (
          <option value={i + 1} key={i}>
            {i + 1}
          </option>
        ))}
      </select>

      <DialogBox isOpen={isOpen} onClose={handleDialogClose}>
        <>
          <h2>Pasajeros</h2>
          <p>
            Por favor, selecciona la cantidad de pasajeros adultos y menores.
          </p>
          <label>
            Adultos
            <input
              type='number'
              value={`${adultCount}`}
              onChange={handleAdultChange}
            />
          </label>
          <label>
            Menores
            <input
              type='number'
              value={`${childCount}`}
              onChange={handleChildChange}
            />
          </label>
        </>
      </DialogBox>
    </div>
  )
}

export default PassengerSelect
