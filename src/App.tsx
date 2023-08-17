import { useEffect, useState } from 'react'

import './App.css'
import { type Stay } from './types'
import { useSelector } from 'react-redux'
import { RootState } from './state/store'
import allStays from './assets/stays.json'
import { Navbar } from './components/Navbar'
import { Header } from './components/Header'
import { CardContainer } from './components/CardContainer'
import { Footer } from './components/Footer'

function App(): JSX.Element {
  const Initial_State = allStays as Stay[]
  const [stays, setStays] = useState<Stay[]>(Initial_State)
  const locationSelected = useSelector((state: RootState) => state.location)
  const guestsSelected = useSelector((state: RootState) => state.guests)

  useEffect(() => {
    const stayFiltered = Initial_State.filter(
      (stay) =>
        `${stay.city}, ${stay.country}` === locationSelected &&
        (stay.maxGuests ? stay.maxGuests : 0) >= guestsSelected,
    )
    setStays(stayFiltered)
  }, [locationSelected, guestsSelected])

  return (
    <>
      <div className='app-container'>
        <Navbar />
        <Header staysNumber={stays.length} />
        <CardContainer stays={stays} />
        <Footer />
      </div>
    </>
  )
}

export default App
