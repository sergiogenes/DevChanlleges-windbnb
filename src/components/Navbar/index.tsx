import { useRef, useState } from 'react'
import logo from '../../assets/logo.svg'
import './index.css'

export const Navbar = () => {
  const [wide, setWide] = useState(false)
  const navBarRef = useRef<HTMLDivElement>(null)

  const handleWide = () => {
    if (!wide) {
      navBarRef.current?.classList.add('wide')
      setWide(true)
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    navBarRef.current?.classList.remove('wide')
    setWide(false)
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
            />
          </label>
          <label htmlFor='guests'>
            <p>Guests</p>
            <input type='text' id='guests' placeholder='Add guests' />
          </label>
          <button type='submit'>
            <span className='material-icons'>search</span>
          </button>
        </form>
        <div className='location-options'>
          <ul>
            <li>
              <option value='Helsinki, Finland'> Helsinki, Finland</option>
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
      </div>
    </nav>
  )
}
