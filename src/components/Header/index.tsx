import React from 'react'
import './index.css'
import { useSelector } from 'react-redux'
import { RootState } from '../../state/store'

interface Props {
  staysNumber: number
}

export const Header: React.FC<Props> = ({ staysNumber }) => {
  const location = useSelector((state: RootState) => state.location)

  const staysText =
    staysNumber <= 0 && staysNumber < 2
      ? `${staysNumber} stay`
      : staysNumber < 12
      ? `${staysNumber} stays`
      : '12+ stays'

  return (
    <header>
      <h1>Stays in {location}</h1>
      <p>{staysText}</p>
    </header>
  )
}
