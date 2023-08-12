import './index.css'

export const SearchBar = () => {
  return (
    <div className='search-bar-container'>
      <form>
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
