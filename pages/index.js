import { useEffect, useState } from 'react'

import Head from 'next/head'

import Greetings from '../components/Greetings'
import RightPanel from '../components/RightPanel'
import CurrentTemperature from '../components/CurrentTemperature'

const fetcher = async params => {
  const apiWeatherUrl = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_URL
  const apiWeatherKey = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY
  const res = await fetch(`${apiWeatherUrl}${params}&appid=${apiWeatherKey}`, {
    method: 'GET',
  })
  const json = await res.json()
  return json
}

export default function Index() {
  const [currentWeather, setCurrentWeather] = useState({})
  const [error, setError] = useState(null)
  const [currentLocation, setCurrentLocation] = useState({})
  const citySearch = city => {
    const queryString = `?q=${city}&lang=en&units=metric`
    fetcher(queryString).then(response => {
      if (response.cod != 404) setData(response)
    })
  }

  const onClickGeoLocation = ({
    latitude = '',
    longitude = '',
    error = null,
  }) => {
    if (error) {
      setError(error)
    } else {
      setCurrentLocation({ latitude, longitude })
    }
  }

  const onClickSearch = city => {
    citySearch(city)
  }

  const setData = source => {
    const { weather, sys, main, name, timezone, dt } = source
    setCurrentWeather({
      name,
      weather,
      sys,
      main,
      timezone,
      dt,
    })
  }

  useEffect(() => {
    citySearch('Auckland')
  }, [])

  useEffect(() => {
    if (Object.keys(currentLocation).length > 0) {
      const { latitude, longitude } = currentLocation
      const queryString = `?lat=${latitude}&lon=${longitude}&lang=en&units=metric`
      fetcher(queryString).then(response => {
        if (response.cod != 404) setData(response)
      })
    }
  }, [currentLocation])

  if (Object.keys(currentWeather).length === 0)
    return <div>No weather data found</div>

  return (
    <div>
      <Head>
        <title>Weather Forecast</title>
      </Head>

      <main className='flex justify-between w-screen'>
        <section className='flex flex-col justify-between'>
          <Greetings />
          <CurrentTemperature weather={currentWeather} />
        </section>
        <RightPanel
          weather={currentWeather}
          onClickGeoLocation={onClickGeoLocation}
          onClickSearch={onClickSearch}
        />
      </main>
    </div>
  )
}
