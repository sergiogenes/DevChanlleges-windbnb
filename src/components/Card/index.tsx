import './index.css'
import { Stay } from '../../types'

interface Props {
  stay: Stay
}

const SuperHost: React.FC = () => {
  return <div className='super-host'>SUPER HOST</div>
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
                ? `${stay.type}.${stay.beds} beds`
                : `${stay.type}`}
            </p>
          </div>
          <span className='stay-rating row'>
            <span className='material-icons'>star</span>
            <span> {stay.rating}</span>
          </span>
        </div>
      </figcaption>
    </figure>
  )
}
