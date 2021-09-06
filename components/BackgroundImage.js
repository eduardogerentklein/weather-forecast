import { useEffect, useState } from 'react'
import Lottie from 'react-lottie'
import Image from 'next/image'

import LoadingPaperPlane from '../public/lotties/loading-paperplane.json'

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData: LoadingPaperPlane,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
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

const BackgroundImage = ({ city }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [image, setImage] = useState(process.env.NEXT_PUBLIC_DEFAULT_IMAGE_URL)

  useEffect(() => {
    setLoading(true)
    setError(false)
    fetcher(
      `${process.env.NEXT_PUBLIC_UNSPLASH_API_URL}?page=1&query=${city}&w=${width}&h=${height}`
    ).then(res => {
      const imgUrl = res.results.map(result => result.urls.regular)[0]

      if (res.total === 0) {
        setError(true)
        setImage(
          'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTY2NzZ8MHwxfHNlYXJjaHwxfHw0MDR8ZW58MHx8fHwxNjMwOTQxNjMy&ixlib=rb-1.2.1&q=80&w=1080'
        )
      } else setImage(imgUrl)

      setLoading(false)
    })
  }, [city])

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
        <>
          <div className='box'>
            {loading ? (
              <div className='flex justify-center items-center loading-box'>
                {loading && (
                  <Lottie
                    options={lottieOptions}
                    height={150}
                    width={150}
                    className='cursor-default'
                  />
                )}
              </div>
            ) : (
              <>
                {error && <p>404 City not found!</p>}
                <Image src={image} width={width} height={height} />
              </>
            )}
            <style jsx>
              {`
                .box {
                  position: fixed;
                  z-index: -1;
                  top: 0;
                }

                .loading-box {
                  width: calc(100vw - 24rem);
                  height: 100vh;
                }
              `}
            </style>
          </div>
        </>
      )
    }
  }

  return null
}

export default BackgroundImage
