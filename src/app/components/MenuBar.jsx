import React from 'react'
import main from '../main.module.css'
import Link from 'next/link'

async function getdata(){
  const menu=(await(await fetch(`http://localhost:3000/api/mymenu`, {
    next:{
      revalidate:30
    }
  })).json())['data']
   return {menu:menu}
}

const MenuBar =async (props) => {
  const data=await getdata() 
  console.log(data)
  return (
    <div className=' shadow mb-1'>
     <div className="navbar grid md:grid-cols-8 mx-auto" >
     <div className="navbar-end">
    <div className={main.maindiv}>
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {
        
          data && data?.menu?.map((elm, index)=>{
          return <li key={index}><Link href={`/${elm['menuName']}`}>{elm['menuName']}</Link></li>
        })
      }
    
      </ul>
    </div>
    </div>
    
  </div>
  <div className=" navbar hidden lg:flex col-span-7">
  <div><img src="./image/pdb.png" alt="" className={main.subdiv}/></div>
    <ul className="menu menu-horizontal px-1">
      {
        data.menu.map((elm, index)=>{
          let item=elm['menuName'].toLowerCase()
          return <li key={index}><Link href={`/${item}`}>{elm['menuName']}</Link></li>
        })
      }
    
       
    </ul>
  </div>
</div>
{props.children}
    </div>
   
  )
}

export default MenuBar

