import { useRef, useState } from 'react'
import logo from '../../assets/logo.svg'
import './index.css'
import InputNumber from '../InputNumber/InputNumber'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../../state/store'
import { setLocation } from '../../state/locationSlice'
import { Location } from '../../types'
import { setGuests } from '../../state/guestsSlice'

export const Navbar = () => {
  const location: Location = useSelector((state: RootState) => state.location)
  const [wide, setWide] = useState(false)
  const [adults, setAdults] = useState<number>(0)
  const [children, setChildren] = useState<number>(0)
  const [locationState, setLocationState] = useState<Location>(location)
  const navBarRef = useRef<HTMLDivElement>(null)
  const guestsInputRef = useRef<HTMLInputElement>(null)
  const guestsOptionsRef = useRef<HTMLDivElement>(null)
  const locationInputRef = useRef<HTMLInputElement>(null)
  const locationOptionsRef = useRef<HTMLDivElement>(null)
  const dispatch: AppDispatch = useDispatch()

  const handleWide = () => {
    if (!wide) {
      navBarRef.current?.classList.add('wide')
      setWide(true)
    }
    if (document.activeElement === locationInputRef.current) {
      locationOptionsRef.current?.classList.add('visible')
      guestsOptionsRef.current?.classList.remove('visible')
    }
    if (document.activeElement === guestsInputRef.current) {
      locationOptionsRef.current?.classList.remove('visible')
      guestsOptionsRef.current?.classList.add('visible')
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(setLocation(locationState))
    dispatch(setGuests(adults + children))
    navBarRef.current?.classList.remove('wide')
    setWide(false)
  }

  const pickLocation = (newLocation: Location) => {
    //console.log('click en options')
    //console.log(newLocation)
    //dispatch(setLocation(newLocation))
    setLocationState(newLocation)
  }

  const onIncrementAdult = (value: number) => {
    setAdults(value)
    //dispatch(setGuests(value + children))
  }
  const onDecrementAdult = (value: number) => {
    setAdults(value)
    //dispatch(setGuests(value + children))
  }
  const onIncrementChildren = (value: number) => {
    setChildren(value)
    //dispatch(setGuests(adults + value))
  }
  const onDecrementChildren = (value: number) => {
    setChildren(value)
    //dispatch(setGuests(adults + value))
  }
  const handleInputGuests = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value)
    if (value > 0 && value <= 10) {
      dispatch(setGuests(value))
      setAdults(value)
      setChildren(0)
    }
  }

  const handleClose = () => {
    navBarRef.current?.classList.remove('wide')
    setWide(false)
  }

  return (
    <nav ref={navBarRef}>
      <img src={logo} alt='image of the logo' />
      <div className='search-bar-container' onClick={handleWide}>
        <div className='close' onClick={handleClose}>
          <span className='material-symbols-outlined'>close</span>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor='location'>
            <p>Location</p>
            <input
              type='text'
              id='location'
              value={locationState}
              ref={locationInputRef}
            />
          </label>
          <label htmlFor='guests'>
            <p>Guests</p>
            <input
              type='text'
              id='guests'
              placeholder='Add guests'
              value={`${adults + children} ${
                adults + children > 1 ? 'guests' : 'guest'
              } `}
              ref={guestsInputRef}
              onChange={handleInputGuests}
            />
          </label>
          <button type='submit'>
            <span className='material-icons'>search</span>
          </button>
        </form>
        <div className='location-options' ref={locationOptionsRef}>
          <ul>
            <li>
              <option
                value='Helsinki, Finland'
                onClick={() => pickLocation('Helsinki, Finland')}
              >
                Helsinki, Finland
              </option>
            </li>
            <li>
              <option
                value='Turku, Finland'
                onClick={() => pickLocation('Turku, Finland')}
              >
                Turku, Finland
              </option>
            </li>
            <li>
              <option
                value='Oulu, Finland'
                onClick={() => pickLocation('Oulu, Finland')}
              >
                Oulu, Finland
              </option>
            </li>
            <li>
              <option
                value='Vaasa, Finland'
                onClick={() => pickLocation('Vaasa, Finland')}
              >
                Vaasa, Finland
              </option>
            </li>
          </ul>
        </div>
        <div className='guests-container' ref={guestsOptionsRef}>
          <div className='guests-options'>
            <h4>Adults</h4>
            <p>Ages 13 or above</p>
            <InputNumber
              value={adults}
              onDecrement={onDecrementAdult}
              onIncrement={onIncrementAdult}
            />
          </div>
          <div className='guests-options'>
            <h4>Children</h4>
            <p>Ages 2-12</p>
            <InputNumber
              value={children}
              onDecrement={onDecrementChildren}
              onIncrement={onIncrementChildren}
            />
          </div>
        </div>
      </div>
    </nav>
  )
}
