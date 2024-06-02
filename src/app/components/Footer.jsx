import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import SocialIcon from './SocialIcon';

async function getdata(){
    const social=(await(await fetch(`http://localhost:3000/api/social`, {
        next:{
          revalidate:30
        }
      })).json())['data']
     return {social:social}
  }
const Footer = async() => {
    const data=await getdata() 
  return (
    <div>
        <div className=' grid lg:grid-cols-4 bg-[#333333]'>
            <div className=' flex items-center justify-center'>               
                <img src="../image/pdb.png" alt="" width='100px' />                         
            </div>
            <div className=' col-span-2'>
             <ul className=' list-disc text-white pt-[42px] pb-[42px]'>
                <li>
                    <div className=' flex'>
                    <IoLocationOutline  className=' mt-1'/>
                     <p className=' inline-block align-top'>Ghorashal, Palash, Narsingdi.</p>
                    </div>               
                </li>
                <li>
                <div className=' flex '>
                <FaPhoneAlt className='  mr-1'/>
                 <p className=' inline-block align-top'>+88 0248313014, +88 02222228394, +88 02222222406, +88 0258310842</p>
                    </div>
                </li>
                <li>
                <div className=' flex '>
                <FaEnvelope className=' mt-1 mr-2'/> 
                <p className=' inline-block align-top'>info@biam.org.bd</p>
                    </div>
                </li>
              
             </ul>
            </div>
            <div className='text-center'>
        <SocialIcon data={data}/>
                
                </div>            
        </div>
        <div className=' grid lg:grid-cols-4 bg-[#000000] text-white py-[20px] my-[1px]'>
            <div className=' col-span-3 ps-32'>
                <p>© 2024 Ghorashal Training Center (GTC) Foundation. All rights reserved.</p>
            </div>
            <div>
                <p>Developed by Md. Rasheudul Islam.</p>
            </div>

        </div>
      
    </div>
  )
}

export default Footer
