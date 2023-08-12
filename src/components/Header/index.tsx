import React from 'react'
import './index.css'

interface Props {
  staysNumber: number
}

export const Header: React.FC<Props> = ({ staysNumber }) => {
  const staysText =
    staysNumber <= 0 && staysNumber < 2
      ? `${staysNumber} stay`
      : staysNumber < 12
      ? `${staysNumber} stays`
      : '12+ stays'

  return (
    <header>
      <h1>Stays in Finland</h1>
      <p>{staysText}</p>
    </header>
  )
}
