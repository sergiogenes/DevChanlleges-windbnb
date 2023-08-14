import { useState } from 'react'

import './App.css'
import { type Stay } from './types'
import staysJson from './assets/stays.json'
import { Navbar } from './components/Navbar'
import { Header } from './components/Header'
import { CardContainer } from './components/CardContainer'
import { Footer } from './components/Footer'

function App(): JSX.Element {
  const Initial_State = staysJson as Stay[]
  const [stays, setStays] = useState(Initial_State)

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
