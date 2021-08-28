import useSWR from 'swr'

import H1 from './H1'

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
      <H1>Good Afternoon, {name}</H1>
    </>
  )
}

export default Greetings
