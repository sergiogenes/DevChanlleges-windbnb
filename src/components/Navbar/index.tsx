import logo from '../../assets/logo.svg'
import PassengerSelect from '../PasangerSelect/PasangerSelect'
import { SearchBar } from '../SearchBar'
import './index.css'

export const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt='image of the logo' />
      <SearchBar />
    </nav>
  )
}
