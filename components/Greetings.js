import H5 from './H5'
import Paragraph from './Paragraph'

const Greetings = ({ userName, showUserName }) => {
  return (
    <header className='p-10'>
      <H5>Good Afternoon{showUserName && `, ${userName}`}</H5>
      <Paragraph className='text-white-75'>Have a nice day</Paragraph>
    </header>
  )
}

export default Greetings
