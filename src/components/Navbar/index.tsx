import { useRef, useState } from 'react'
import logo from '../../assets/logo.svg'
import './index.css'
import InputNumber from '../InputNumber/InputNumber'
import { useSelector, useDispatch } from 'react-redux'

export const Navbar = () => {
  const [wide, setWide] = useState(false)
  const navBarRef = useRef<HTMLDivElement>(null)
  const guestsInput = useRef<HTMLInputElement>(null)
  const guestsOptions = useRef<HTMLDivElement>(null)
  const locationInput = useRef<HTMLInputElement>(null)
  const locationOptions = useRef<HTMLDivElement>(null)
  const location = useSelector((state) => state)

  console.log('state ==>>', location)
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

  const pickLocation = (event: React.MouseEvent<HTMLOptionElement>) => {
    console.log('click en options')
    console.log(event.currentTarget.value)
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
              defaultValue={'Helsinki, Finland'}
              ref={locationInput}
            />
          </label>
          <label htmlFor='guests'>
            <p>Guests</p>
            <input
              type='text'
              id='guests'
              placeholder='Add guests'
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
              <option value='Helsinki, Finland' onClick={pickLocation}>
                {' '}
                Helsinki, Finland
              </option>
            </li>
            <li>
              <option value='Turku, Finland'>Turku, Finland</option>
            </li>
            <li>
              <option value='Oulu, Finland'>Oulu, Finland</option>
            </li>
            <li>
              <option value='Vaasa, Finland'>Vaasa, Finland</option>
            </li>
          </ul>
        </div>
        <div className='guests-container' ref={guestsOptions}>
          <div className='guests-options'>
            <h4>Adults</h4>
            <p>Ages 13 or above</p>
            <InputNumber />
          </div>
          <div className='guests-options'>
            <h4>Children</h4>
            <p>Ages 2-12</p>
            <InputNumber />
          </div>
        </div>
      </div>
    </nav>
  )
}
