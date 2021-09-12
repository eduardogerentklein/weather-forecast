import useSWR from 'swr'

import H5 from './H5'
import Paragraph from './Paragraph'

const fetcher = async url => {
  const res = await fetch(url)
  const json = await res.json()
  return json
}

const Greetings = () => {
  const { data, error } = useSWR(`/api/user`, fetcher)

  if (error) return <div className='text-white-100'>Failed to load</div>
  if (!data) return <div className='text-white-100'>Loading...</div>

  const { name } = data
  return (
    <header className='p-10'>
      <H5>Good Afternoon, {name}</H5>
      <Paragraph className='text-white-75'>Have a nice day</Paragraph>
    </header>
  )
}

export default Greetings
