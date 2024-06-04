import Link from 'next/link'
import React from 'react'
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
async function getdata(){
  const socials=(await(await fetch(`http://localhost:3000/api/social`, {
      next:{
        revalidate:30
      }
    })).json())['data']
   return {socials:socials}
}
const SocialIcon = async(props) => {
  const data=await getdata() 
  
 
  
  return (
    <div> 
       {
  data.socials.map((elm, index) => {
    return (
      // The key should be on the `ul` element
      <ul key={index} className="flex">
        {/* No need for a key on the `li` or `Link` elements here */}
        <li key='1'>
          <Link key='1' href={elm['facebook']} target='_blank'>
            <FaFacebookF className='size-[35px] bg-blue-700 text-white p-1' />
          </Link>
        </li>
        <li key='2'>
          <Link key='2' href={elm['twitter']} target='_blank'>
            <FaTwitter className='size-[35px] bg-[#309AEA] p-1' />
          </Link>
        </li>
        <li key='3'>
          <Link key='3' href={elm['youtube']} target='_blank'>
            <IoLogoYoutube className='size-[35px] bg-[#CA3523] p-1' />
          </Link>
        </li>
        <li key='4'>
          <Link key='4' href={elm['Linkedin']} target='_blank'>
            <FaLinkedin className='size-[35px] bg-[#FF3333] p-1' />
          </Link>
        </li>
      </ul>
    );
  })
}

    </div>
  )
}

export default SocialIcon
