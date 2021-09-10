import {
  CloudLightning,
  CloudDrizzle,
  CloudRain,
  CloudSnow,
  Sun,
  CloudOff,
  Cloud
} from 'react-feather'

import Caption from './Caption'

const ForecastDescription = ({ weather }) => {
  const imageProps = {
    className: 'text-white-100',
    size: 36
  }
  const weatherConditions = {
    Thunderstorm: <CloudLightning {...imageProps} />,
    Drizzle: <CloudDrizzle {...imageProps} />,
    Rain: <CloudRain {...imageProps} />,
    Snow: <CloudSnow {...imageProps} />,
    Clear: <CloudOff {...imageProps} />,
    Clouds: <Cloud {...imageProps} />,
    Default: <Sun {...imageProps} />
  }
  const main = weather.weather[0].main
  return (
    <div className='flex flex-col items-center'>
      {weatherConditions.hasOwnProperty(main)
        ? weatherConditions[main]
        : weatherConditions['Default']}
      <Caption className='text-white-100 caption-description'>
        {weather.weather[0].description}
      </Caption>
    </div>
  )
}

export default ForecastDescription
