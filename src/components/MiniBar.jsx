import React from 'react'

const MiniBar = () => {
  return (
    <div className='w-full '>
        <div className='w-[50%] h-full  mx-auto max-w-[1200px] pt-16 flex items-center justify-center'>
            <ul className='flex flex-row gap-20 bg-[#EEF5FF] rounded-full px-16 py-4'>
            <li className='text-[#1A73E8] font-[400] leading-[22px] text-center text-[25px]'>Refer</li>
            <li className='text-[#4B4B4B] font-[400] leading-[22px] text-center text-[25px]'>Benefits</li>
            <li className='text-[#4B4B4B] font-[400] leading-[22px] text-center text-[25px]'>FAQs</li>
            <li className='text-[#4B4B4B] font-[400] leading-[22px] text-center text-[25px]'>Support</li>
            </ul>
        </div>
    </div>
  )
}

export default MiniBar