import { format } from 'date-fns'
import { useEffect, useState } from 'react'

import H1 from './H1'
import H4 from './H4'
import Caption from './Caption'

const CurrentTemperature = ({ weather, className = '' }) => {
  const [date, setDate] = useState('')

  useEffect(() => {
    const { dt, timezone } = weather
    const currentDate = new Date(dt * 1000 + timezone * 1000)
    setDate(format(currentDate, 'HH:mm - cccc, d MMM'))
  }, [weather])

  return (
    <div className={`flex p-10 ${className}`}>
      <div>
        <H1 className='text-white-100 pr-10'>
          {parseInt(weather.main.temp)}º C
        </H1>
      </div>
      <div>
        <H4 className='text-white-100'>{weather.name}</H4>
        <Caption className='text-white-100 pt-2'>{date}</Caption>
      </div>
    </div>
  )
}

export default CurrentTemperature
