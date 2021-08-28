import { Thermometer, Droplet, TrendingUp, TrendingDown } from 'react-feather'
import H4 from '../components/H4'
import H6 from '../components/H6'
import Subtitle from '../components/Subtitle'

const RightPanel = ({ className }) => (
  <>
    <section className={`right-panel bg-blue-100 w-96 h-screen ${className}`}>
      <section className='flex flex-col items-center'>
        <H4 className='mt-2 text-blue-50'>Auckland</H4>
        <H6 className='text-blue-25'>NZ</H6>
      </section>
      <section className='flex flex-col items-start px-5'>
        <div className='flex py-4'>
          <Thermometer size={16} className='text-white-100' />
          <Subtitle className='text-white-100 px-5'>Current: 23º C</Subtitle>
        </div>
        <div className='flex py-4'>
          <TrendingUp size={16} className='text-white-100' />
          <Subtitle className='text-white-100 px-5'>High: 29º C</Subtitle>
        </div>
        <div className='flex py-4'>
          <TrendingDown size={16} className='text-white-100' />
          <Subtitle className='text-white-100 px-5'>Low: 20º C</Subtitle>
        </div>
        <div className='flex py-4'>
          <Droplet size={16} className='text-white-100' />
          <Subtitle className='text-white-100 px-5'>Humidity: 62%</Subtitle>
        </div>
      </section>
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

export default RightPanel
