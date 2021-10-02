import H5 from './H5'
import Paragraph from './Paragraph'

const Greetings = ({ userName, showUserName }) => {
  const currentDate = new Date()
  const hours = currentDate.getHours()
  const greeting =
    hours < 12 || hours < 18 ? 'Have a nice day' : 'Have a nice evening'
  const greetingMessage =
    hours < 12 ? 'Good Morning' : hours < 18 ? 'Good Afternoon' : 'Good Evening'
  return (
    <header className='p-10'>
      <H5>
        {greetingMessage}
        {showUserName && `, ${userName}`}
      </H5>
      <Paragraph className='text-white-75'>{greeting}</Paragraph>
    </header>
  )
}

export default Greetings
