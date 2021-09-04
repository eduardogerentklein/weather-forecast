import dynamic from 'next/dynamic'

const BackgroundImage = dynamic(() => import('./BackgroundImage'), {
  ssr: false,
})

const Layout = ({ children }) => {
  const city = localStorage.getItem('city') || 'Auckland'
  return (
    <>
      <div className='container'>
        {children}
        <style jsx>
          {`
            .container {
              z-index: 2;
              width: 100%;
              height: 100%;
              position: fixed;
            }
          `}
        </style>
      </div>
      <BackgroundImage city={city} />
    </>
  )
}

export default Layout
