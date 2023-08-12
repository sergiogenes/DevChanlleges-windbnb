import './index.css'
import { type Stay } from '../../types'
import { Card } from '../Card'

interface Props {
  stays: Stay[]
}

export const CardContainer: React.FC<Props> = ({ stays }) => {
  return (
    <div className='card-container'>
      {stays.map((stay) => {
        return <Card key={stay.title} stay={stay} />
      })}
    </div>
  )
}
