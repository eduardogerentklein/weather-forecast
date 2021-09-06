const Layout = ({ children }) => {
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
    </>
  )
}

export default Layout
