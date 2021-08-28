import Head from 'next/head'

import Greetings from '../components/Greetings'
import RightPanel from '../components/RightPanel'
import CurrentTemperature from '../components/CurrentTemperature'

export default function Index() {
  return (
    <div>
      <Head>
        <title>Weather Forecast</title>
      </Head>

      <main className='flex justify-between'>
        <section>
          <Greetings />
          <CurrentTemperature />
        </section>
        <section>
          <RightPanel />
        </section>
      </main>
    </div>
  )
}
