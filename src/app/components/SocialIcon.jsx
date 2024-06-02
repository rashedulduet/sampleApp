import Link from 'next/link'
import React from 'react'
import { FaFacebookSquare, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import socialcss from '../api/social/social.module.css'
const SocialIcon = (props) => {
  
  return (
    <div> 
        {
              props.data.social.map((elm,index)=>{
                return (
               <ul className= {`flex ${socialcss.lipro}`} >
                 <li><Link href={elm['facebook']} target='_blank'><FaFacebookF  className=' size-[35px] bg-blue-700 text-white p-1'/></Link></li>
                <li><Link href={elm['twitter']} target='_blank'><FaTwitter className=' size-[35px] bg-[#309AEA] p-1'/></Link></li>
                <li><Link href={elm['youtube']} target='_blank'><IoLogoYoutube className=' size-[35px] bg-[#CA3523] p-1'/></Link></li>
                <li><Link href={elm['Linkedin']} target='_blank'><FaLinkedin className=' size-[35px] bg-[#FF3333] p-1'/></Link></li>
               
               </ul>
              )
              })
        }

    </div>
  )
}

export default SocialIcon
