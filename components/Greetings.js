import useSWR from 'swr'

import Title from './Title'

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
    <>
      <Title className='text-7xl'>Good Afternoon, {name}</Title>
    </>
  )
}

export default Greetings
