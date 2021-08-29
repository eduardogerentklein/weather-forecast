import {
  Thermometer,
  Droplet,
  TrendingUp,
  TrendingDown,
  Linkedin,
  GitHub,
  Search,
  MapPin,
} from 'react-feather'
import Link from 'next/link'

import ForecastDescription from '../components/ForecastDescription'
import Subtitle from '../components/Subtitle'
import Footer from '../components/Footer'
import H4 from '../components/H4'
import H6 from '../components/H6'
import Button from './Button'
import Input from './Input'

const RightPanel = ({ onClickGeoLocation }) => {
  const positionOptions = {
    enableHighAccuracy: true,
    timeout: 15000,
    maximumAge: 1000,
  }
  const handleClickCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords
        onClickGeoLocation({ latitude, longitude })
      },
      err => {
        const error =
          err.code === 1
            ? 'Please, enable your location.'
            : 'Could not find your location, please try again later.'
        onClickGeoLocation({ error })
      },
      positionOptions
    )
  }

  return (
    <>
      <section className='right-panel flex flex-col justify-between bg-blue-100 w-96 h-screen'>
        <section className='flex items-center px-5 py-10'>
          <Input />
          <Button className='mx-3'>
            <Search size={20} className='text-white-100' />
          </Button>
          <Button onClick={handleClickCurrentLocation}>
            <MapPin size={20} className='text-white-100' />
          </Button>
        </section>
        <section className='flex flex-col items-center'>
          <H4 className='text-blue-50'>Auckland</H4>
          <H6 className='text-blue-25'>NZ</H6>
        </section>
        <section className='flex flex-col items-start px-5'>
          <div className='flex py-4'>
            <Thermometer size={20} className='text-white-100' />
            <Subtitle className='text-white-100 px-5'>Current: 23º C</Subtitle>
          </div>
          <div className='flex py-4'>
            <TrendingUp size={20} className='text-white-100' />
            <Subtitle className='text-white-100 px-5'>High: 29º C</Subtitle>
          </div>
          <div className='flex py-4'>
            <TrendingDown size={20} className='text-white-100' />
            <Subtitle className='text-white-100 px-5'>Low: 20º C</Subtitle>
          </div>
          <div className='flex py-4'>
            <Droplet size={20} className='text-white-100' />
            <Subtitle className='text-white-100 px-5'>Humidity: 62%</Subtitle>
          </div>
        </section>
        <section>
          <ForecastDescription />
        </section>
        <Footer>
          <Link href='https://www.github.com/eduardogerentklein'>
            <GitHub
              className='cursor-pointer text-blue-75 hover:text-blue-25'
              size={20}
            />
          </Link>
          <Link href='https://www.linkedin.com/in/eduardoklein/'>
            <Linkedin
              className='cursor-pointer text-blue-75 hover:text-blue-25'
              size={20}
            />
          </Link>
        </Footer>
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
      </section>
    </>
  )
}

export default RightPanel