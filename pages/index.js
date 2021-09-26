import { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'
import Head from 'next/head'

import Greetings from '../components/Greetings'
import RightPanel from '../components/RightPanel'
import CurrentTemperature from '../components/CurrentTemperature'
import Modal from '../components/Modal'
import Input from '../components/Input'
import Button from '../components/Button'

const fetcher = async params => {
  const apiWeatherUrl = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_URL
  const apiWeatherKey = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY
  const res = await fetch(`${apiWeatherUrl}${params}&appid=${apiWeatherKey}`, {
    method: 'GET'
  })
  const json = await res.json()
  return json
}

export default function Index() {
  const [currentWeather, setCurrentWeather] = useState({})
  const [error, setError] = useState(null)
  const [currentLocation, setCurrentLocation] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [userName, setUserName] = useState('')
  const [showUserName, setShowUserName] = useState(false)
  const citySearch = city => {
    const queryString = `?q=${city}&lang=en&units=metric`
    fetcher(queryString).then(response => {
      if (response.cod != 404) setData(response)
    })
  }

  const hideModal = () => {
    setShowModal(false)
  }

  const onClickGeoLocation = ({
    latitude = '',
    longitude = '',
    error = null
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
      dt
    })
  }

  const handleUserChange = inputValue => {
    setUserName(inputValue)
  }

  const handleSubmit = () => {
    localStorage.setItem('userName', userName)
    setShowUserName(true)
    hideModal()
  }

  useEffect(() => {
    citySearch('Auckland')
    const currentUser = localStorage.getItem('userName')
    if (typeof currentUser === undefined || currentUser === null) {
      setShowModal(true)
    } else {
      setUserName(currentUser)
      setShowUserName(true)
    }
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

  const actionButtons = (
    <>
      <Button
        className='w-full md:w-auto mb-2 md:mb-0 text-white-100 py-2 px-3 bg-hot-pink-100 hover:bg-pink-100'
        onClick={handleSubmit}
        disabled={userName === ''}>
        Allow and save
      </Button>
      <Button
        className='w-full md:w-auto text-white-100 py-2 px-3 md:mx-3 bg-red-75 hover:bg-red-100'
        onClick={hideModal}>
        I dont want it
      </Button>
    </>
  )

  return (
    <div>
      <Head>
        <title>Weather Forecast - {currentWeather.name}</title>
      </Head>

      <main className='flex justify-between w-screen'>
        <section className='hidden md:flex flex-col justify-between'>
          <Greetings userName={userName} showUserName={showUserName} />
          <CurrentTemperature weather={currentWeather} />
        </section>
        <RightPanel
          weather={currentWeather}
          onClickGeoLocation={onClickGeoLocation}
          onClickSearch={onClickSearch}
        />
        {!isMobile && (
          <Modal
            show={showModal}
            title='How do you want to be called?'
            description='Your name will be stored in your browser, and every time that you open it, your name will be displayed automatically!'
            actionButtons={actionButtons}>
            <Input
              type='text'
              placeholder='Ex: John Doe'
              className='border-b-2 border-black-75 text-black-100 p-1'
              handleChange={handleUserChange}
            />
          </Modal>
        )}
      </main>
    </div>
  )
}
