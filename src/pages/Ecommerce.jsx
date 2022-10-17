import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'
import { Stacked, Pie, Button, SparkLine } from '../components'
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'

const Ecommerce = () => {
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-gray-400'>Earnings</p>
              <p className='text-2xl'>$63,877.48</p>
            </div>
          </div>
          <div className='mt-6'>
            <Button 
              color='white'
              bgColor='blue'
              text='Download'
              borderRadius='10px'
              size='md'
            />
          </div> 
        </div>
        <div className='flex flex-wrap justify-center items-center m-3 gap-1'>
            {earningData?.map(({ title, icon, iconColor, iconBg, pcColor, amount, percentage }) => (
              <div
                key={title}
                className='bg-white dark:bg-secondary-dark-bg dark:text-gray-200 md:w-56 p-4 pt-9 rounded-2xl'
                >
                  <button 
                    type='button' 
                    style={{ color: iconColor, backgroundColor: iconBg}}
                    className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'
                  >
                    {icon}
                  </button>
                  <p className='mt-3'>
                    <span className='text-lg font-semibold'>{amount}</span>
                    <span className={`text-sm text-${pcColor} ml-2`}>{percentage}</span>
                  </p>
                  <p className='text-sm text-gray-400 mt-1'>{title}</p>
                </div>
            ))}
          </div>
      </div>
      <div className='flex flex-wrap justify-center gap-10'>
          <div className='bg-white dark:bg-secondary-dark-bg dark:text-gray-200 m-3 p-4 rounded-2xl md:w-780'>
            <div className='flex justify-between'>
              <p className='font-semibold text-xl'>Revenue Updates</p>
              <div className='flex items-center gap-4'>
                <p className='flex items-center text-gray-600 gap-2 hover:drop-shadow-xl'>
                  <span><GoPrimitiveDot /></span>
                  <span>Expense</span>
                </p>
                <p className='flex items-center text-green-600 gap-2 hover:drop-shadow-xl'>
                  <span><GoPrimitiveDot /></span>
                  <span>Budget</span>
                </p>
              </div>
            </div>
            <div className='flex flex-wrap justify-center mt-10 gap-10'>
              <div className='border-r-1 border-color m-4 pr-10'>
                <div>
                  <p>
                    <span className='text-3xl font-semibold'>$93,438</span>
                    <span className='p-1.5 cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs hover:drop-shadow-xl '>23%</span>
                  </p>
                  <p className='text-gray-500 mt-1'>Budget</p>
                </div>
                <div className='mt-8'>
                  <p>
                    <span className='text-3xl font-semibold'>$48,438</span>
                  </p>
                  <p className='text-gray-500 mt-1'>Expense</p>
                </div>
                <div className='mt-5'>
                  <SparkLine 
                    currentColor='blue'
                    id='line-sparkline'
                    type='Line'
                    height='80px'
                    width='250px'
                    data={SparklineAreaData}
                    color='blue'
                  />
                </div>
                <div className='mt-10'>
                  <Button 
                    color='white'
                    bgColor='blue'
                    text='Download Report'
                    borderRadius='10px'
                  />
                </div>
              </div>
              <div>
                <Stacked 
                  width='320px'
                  height='360px'
                />
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Ecommerce