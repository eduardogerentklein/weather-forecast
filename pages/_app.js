import Head from 'next/head'
import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('../components/Layout.js'), {
  ssr: false,
})

import '../styles/globals.css'
import '../styles/tailwind.css'

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
)

export default App
