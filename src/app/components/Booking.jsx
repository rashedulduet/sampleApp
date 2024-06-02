import React from 'react'
import Link from 'next/link'

const Booking = () => {
  return (
    <div className=' container mx-auto grid  lg:grid-cols-4 lg:w-[1170px] md:grid-cols-2 mt-4 mb-[60px]'> 
      <div className=' w-[290px] h-[170px] flex justify-center items-center'>
      <div className=' mydiv bg-[#1ABC9C]'>
        <img src="../image/hall.png" alt="" srcset=""  className=' mx-auto pt-[20px]'/>
               <div className='pt-[23px] text-center'>
               <a href='#' className=' text-white'>Hall Booking</a>
               </div>
      </div>
      </div>
      <div className=' w-[290px] h-[170px] flex justify-center items-center'>
      <div className='mydiv  bg-[#E74C3C]'><img src="../image/hostel.png" alt="" srcset="" className=' mx-auto pt-[20px]'/>
      <div className='pt-[23px] text-center'><a href='#' className=' text-white'>Hall Booking</a></div>
      </div>
      </div>
     <div className=' w-[290px] h-[170px] flex justify-center items-center'>
     <div className='mydiv  bg-[#3498DB]'><img src="../image/courseregi.png" alt="" srcset="" className=' mx-auto pt-[20px]'/>
      <div className='pt-[23px] text-center'><a href='#' className=' text-white'>Hall Booking</a></div></div>
     </div>
     <div className=' w-[290px] h-[170px] flex justify-center items-center' >
     <div className='mydiv  bg-[#FF6600]'><img src="../image/memregi.png" alt="" srcset="" className=' mx-auto pt-[20px]'/>
      <div className='pt-[23px] text-center'><a href='#' className=' text-white'>Hall Booking</a></div></div>  
      </div>  
    </div>
  )
}

export default Booking
