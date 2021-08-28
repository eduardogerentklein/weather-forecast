import H1 from './H1'
import H4 from './H4'
import Caption from './caption'

const CurrentTemperature = () => {
  return (
    <div className='flex py-20 px-20'>
      <H1 className='text-white-100'>23º C</H1>
      <div>
        <H4 className='text-white-100'>Auckland</H4>
        <Caption className='text-white-100'>06:09 - monday, 24 oct</Caption>
      </div>
    </div>
  )
}

export default CurrentTemperature
