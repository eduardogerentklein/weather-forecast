// import dynamic from 'next/dynamic'

// const BackgroundImage = dynamic(() => import('./BackgroundImage'), {
//   ssr: false
// })

const Layout = ({ children }) => {
  return (
    <>
      <div className='container'>
        {children}
        <style jsx>
          {`
            .container {
              z-index: 1;
              width: 100%;
              height: 100%;
              position: fixed;
            }
          `}
        </style>
      </div>
      <div className='img-without-api'>
        <style jsx>
          {`
            .img-without-api {
              z-index: 0;
              width: 100%;
              height: 100%;
              position: fixed;
              background-image: url('https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&fm=jpg&fit=crop&w=1080&q=80&fit=max');
            }
          `}
        </style>
      </div>
      {/* <BackgroundImage city={`Auckland`} /> */}
    </>
  )
}

export default Layout
