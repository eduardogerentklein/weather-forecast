import { Cloud } from 'react-feather'

import Caption from './Caption'

const ForecastDescription = ({ description }) => (
  <div className='flex flex-col items-center'>
    <Cloud size={36} className='text-white-100' />
    <Caption className='text-white-100 caption-description'>
      {description}
    </Caption>
  </div>
)

export default ForecastDescription
