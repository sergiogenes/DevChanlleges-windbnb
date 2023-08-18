import './index.css'
import { Stay } from '../../types'

interface Props {
  stay: Stay
}

const SuperHost: React.FC = () => {
  return (
    <div className='super-host'>
      <p>SUPER HOST</p>
    </div>
  )
}

export const Card: React.FC<Props> = ({ stay }) => {
  return (
    <figure className='card'>
      <img src={stay.photo} alt={`imagen for the ${stay.title}`} />
      <figcaption>
        <div className='row'>
          <div className='type-stay-text'>
            {stay.superHost ? <SuperHost /> : null}
            <p>
              {stay.type === 'Entire apartment' && stay.beds
                ? `${stay.type}. ${stay.beds} beds`
                : `${stay.type}`}
            </p>
          </div>
          <span className='stay-rating row'>
            <span className='material-icons'>star</span>
            <span className='rating-number'> {stay.rating}</span>
          </span>
        </div>
        <div className='row'>
          <h5>
            {stay.title.length > 39
              ? stay.title.slice(0, 37).concat('...')
              : stay.title}
          </h5>
        </div>
      </figcaption>
    </figure>
  )
}
