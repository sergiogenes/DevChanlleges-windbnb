import React, { useRef, useState } from 'react'
import './index.css'

export const SearchBar = () => {
  const [wide, setWide] = useState(false)
  const searchBar = useRef<HTMLDivElement>(null)

  const handleWide = (event: React.MouseEvent) => {
    if (!wide) {
      searchBar.current?.classList.add('wide')
      setWide(true)
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    searchBar.current?.classList.remove('wide')
    setWide(false)
  }

  return (
    <div className='search-bar-container' ref={searchBar} onClick={handleWide}>
      <form onSubmit={handleSubmit}>
        <label htmlFor='location'>
          <p>Location</p>
          <input type='text' id='location' defaultValue={'Helsinki, Finland'} />
        </label>
        <label htmlFor='guests'>
          <p>Guests</p>
          <input type='text' id='guests' placeholder='Add guests' />
        </label>
        <button type='submit'>
          <span className='material-icons'>search</span>
        </button>
      </form>
    </div>
  )
}
