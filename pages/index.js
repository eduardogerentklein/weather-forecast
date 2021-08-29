import { useState } from 'react'

import Head from 'next/head'

import Greetings from '../components/Greetings'
import RightPanel from '../components/RightPanel'
import CurrentTemperature from '../components/CurrentTemperature'

export default function Index() {
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('Auckland')
  const onClickGeoLocation = ({
    latitude = '',
    longitude = '',
    error = null,
  }) => {
    if (error) {
      setError(error)
    } else {
      setSearch({ latitude, longitude })
    }
  }

  return (
    <div>
      <Head>
        <title>Weather Forecast</title>
      </Head>

      <main className='flex justify-between w-screen'>
        <section className='flex flex-col justify-between'>
          <Greetings />
          <CurrentTemperature />
        </section>
        <RightPanel onClickGeoLocation={onClickGeoLocation} />
      </main>
    </div>
  )
}
