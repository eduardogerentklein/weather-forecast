import Head from 'next/head'

import Greetings from '../components/Greetings'
import Paragraph from '../components/Paragraph'

export default function Index() {
  return (
    <div>
      <Head>
        <title>Weather Forecast</title>
      </Head>

      <main>
        <Greetings />
        <Paragraph>noway</Paragraph>
      </main>
    </div>
  )
}
