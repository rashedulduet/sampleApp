import React from 'react'

const SocialIcon = () => {
  return (
    <div>
      
    </div>
  )
}

export default SocialIcon


// 'use client'
// import Link from 'next/link'
// import React, { useState, useEffect } from 'react'
// import { FaTwitter, FaLinkedin, FaFacebookF } from "react-icons/fa";
// import { IoLogoYoutube } from "react-icons/io5";

// // Fetch data function
// async function fetchData() {
//   const response = await fetch(`http://localhost:3000/api/social`);
//   const data = await response.json();
//   return data.data;
// }

// // SocialIcon component
// const SocialIcon = () => {
//   const [socials, setSocials] = useState([]);

//   useEffect(() => {
//     fetchData().then(setSocials);
//   }, []);

//   return (
//     <div>
//       {socials.map((elm, index) => (
//         <ul key={index} className="flex">
//           <li>
//             <Link href={elm['facebook']} target='_blank'>
//               <FaFacebookF className='size-[35px] bg-blue-700 text-white p-1' />
//             </Link>
//           </li>
//           <li>
//             <Link href={elm['twitter']} target='_blank'>
//               <FaTwitter className='size-[35px] bg-[#309AEA] p-1' />
//             </Link>
//           </li>
//           <li>
//             <Link href={elm['youtube']} target='_blank'>
//               <IoLogoYoutube className='size-[35px] bg-[#CA3523] p-1' />
//             </Link>
//           </li>
//           <li>
//             <Link href={elm['Linkedin']} target='_blank'>
//               <FaLinkedin className='size-[35px] bg-[#FF3333] p-1' />
//             </Link>
//           </li>
//         </ul>
//       ))}
//     </div>
//   );
// }

// export default SocialIcon;