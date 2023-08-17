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
  const [wide, setWide] = useState(false)
  const [adults, setAdults] = useState<number>(0)
  const [children, setChildren] = useState<number>(0)
  const navBarRef = useRef<HTMLDivElement>(null)
  const guestsInput = useRef<HTMLInputElement>(null)
  const guestsOptions = useRef<HTMLDivElement>(null)
  const locationInput = useRef<HTMLInputElement>(null)
  const locationOptions = useRef<HTMLDivElement>(null)
  const location: Location = useSelector((state: RootState) => state.location)
  const guests: number = useSelector((state: RootState) => state.guests)
  const dispatch: AppDispatch = useDispatch()

  console.log('state ==>>', location)
  console.log('guests ==>>', guests)
  const handleWide = () => {
    console.log('activeElement', document.activeElement)
    console.log('locationInput', locationInput.current)
    if (!wide) {
      navBarRef.current?.classList.add('wide')
      setWide(true)
    }
    if (document.activeElement === locationInput.current) {
      locationOptions.current?.classList.add('visible')
      guestsOptions.current?.classList.remove('visible')
    }
    if (document.activeElement === guestsInput.current) {
      locationOptions.current?.classList.remove('visible')
      guestsOptions.current?.classList.add('visible')
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    navBarRef.current?.classList.remove('wide')
    setWide(false)
  }

  const pickLocation = (newLocation: Location) => {
    console.log('click en options')
    console.log(newLocation)
    dispatch(setLocation(newLocation))
  }

  const onIncrementAdult = (value: number) => {
    setAdults(value)
    dispatch(setGuests(value + children))
  }
  const onDecrementAdult = (value: number) => {
    setAdults(value)
    dispatch(setGuests(value + children))
  }
  const onIncrementChildren = (value: number) => {
    setChildren(value)
    dispatch(setGuests(adults + value))
  }
  const onDecrementChildren = (value: number) => {
    setChildren(value)
    dispatch(setGuests(adults + value))
  }

  return (
    <nav ref={navBarRef}>
      <img src={logo} alt='image of the logo' />
      <div className='search-bar-container' onClick={handleWide}>
        <form onSubmit={handleSubmit}>
          <label htmlFor='location'>
            <p>Location</p>
            <input
              type='text'
              id='location'
              defaultValue={location}
              ref={locationInput}
            />
          </label>
          <label htmlFor='guests'>
            <p>Guests</p>
            <input
              type='text'
              id='guests'
              placeholder='Add guests'
              value={`${guests ? guests : ''}`}
              ref={guestsInput}
            />
          </label>
          <button type='submit'>
            <span className='material-icons'>search</span>
          </button>
        </form>
        <div className='location-options' ref={locationOptions}>
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
        <div className='guests-container' ref={guestsOptions}>
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
