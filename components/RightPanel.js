const RightPanel = ({ children }) => (
  <>
    <div className='right-panel bg-blue-100 w-96 h-screen'>
      {children}
      <style jsx>
        {`
          .right-panel {
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 20px 0px 0px 20px;
            opacity: 0.95;
            filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.25));
          }
        `}
      </style>
    </div>
  </>
)

export default RightPanel
