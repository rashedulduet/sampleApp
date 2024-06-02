import React from 'react'
import Link from "next/link";

const NoticeBoard = () => {
  return (
    <div>
      <div className=" text-center border lg:w-[260px] mx-auto mt-2">
      <h1 className=" bg-blue-700 text-white  mx-auto py-[2px]">Notice Board</h1>
     <div>
     <marquee direction="up" scrollamount="1"  behavior="scroll"  className=' text-center'>
      <ul className='marquebefor'>
        <li ><a href="#">Md. Rashedul Islam</a></li>
        <li ><a href="#">Nishi Islam</a></li>
        <li ><a href="#">Md. An Nahiyan Islam</a></li>
      </ul>
     
     </marquee>
     <div className=" text-end">

     <Link href="../notice%20board" target="_blank" className=" text-red-500">View all</Link>
     </div>
     </div>

      </div>
    </div>
  )
}

export default NoticeBoard
