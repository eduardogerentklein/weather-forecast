import useSWR from 'swr'

import H5 from './H5'
import Paragraph from './Paragraph'

const fetcher = async url => {
  const res = await fetch(url)
  const json = await res.json()
  return json
}

const Greetings = () => {
  const { data, error } = useSWR(`http://localhost:3000/api/user`, fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const { name } = data
  return (
    <div className='py-20 px-20'>
      <H5>Good Afternoon, {name}</H5>
      <Paragraph className='text-white-75'>Have a nice day</Paragraph>
    </div>
  )
}

export default Greetings
