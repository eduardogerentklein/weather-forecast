import Head from 'next/head'

import Greetings from '../components/Greetings'
import RightPanel from '../components/RightPanel'

export default function Index() {
  return (
    <div>
      <Head>
        <title>Weather Forecast</title>
      </Head>

      <main className='flex justify-between'>
        <Greetings />
        <RightPanel>
          <span className='text-white'>Teste</span>
        </RightPanel>
      </main>
    </div>
  )
}
