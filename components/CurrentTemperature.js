import H1 from './H1'
import H4 from './H4'
import Caption from './Caption'

const CurrentTemperature = ({ weather }) => {
  return (
    <div className='flex p-10'>
      <div>
        <H1 className='text-white-100 pr-10'>
          {parseInt(weather.main.temp)}º C
        </H1>
      </div>
      <div>
        <H4 className='text-white-100'>{weather.name}</H4>
        <Caption className='text-white-100 pt-2'>
          06:09 - monday, 24 oct
        </Caption>
      </div>
    </div>
  )
}

export default CurrentTemperature
