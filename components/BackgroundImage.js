import { useEffect, useState } from 'react'
import Image from 'next/image'

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

const fetcher = async url => {
  const authorization = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY
  const res = await fetch(url, {
    method: 'GET',
    headers: { Authorization: `Client-ID ${authorization}` },
  })
  const json = await res.json()
  return json
}

const BackgroundImage = (city = 'Auckland') => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [image, setImage] = useState('')
  fetcher(
    `https://api.unsplash.com/search/photos?page=1&query=${city}&w=${width}&h=${height}`
  ).then(res => {
    console.log(res.results.map(result => result.urls.regular)[0])
    setImage(res.results.map(result => result.urls.regular)[0])
    console.log(image)
  })

  const handleResize = () => {
    const { width, height } = getWindowDimensions()

    setWidth(width)
    setHeight(height)
  }

  useEffect(() => {
    handleResize()
  }, [])

  useEffect(() => {
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })

  if (width && height) {
    if (image) {
      return (
        <div className='box'>
          <Image src={`${image}`} width={width} height={height} />
          <style jsx>
            {`
              .box {
                position: fixed;
                z-index: 0;
                top: 0;
              }
            `}
          </style>
        </div>
      )
    }
  }

  return null
}

export default BackgroundImage
