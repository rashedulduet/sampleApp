import React from 'react'
// api of booking course
async function headdata(){
  const course=(await(await fetch(`http://localhost:3000/api/course/month`, {
    method: 'GET',
      next:{
        revalidate:30
      }
    })).json())['data']
   
   return {course:course}
}


// api of course 
async function getdata(){
  const course=(await(await fetch(`http://localhost:3000/api/course`, {
    method: 'PUT',
      next:{
        revalidate:30
      }
    })).json())['data']
   
   return {course:course}
}
// api of course
async function patchdata(){
  const upcoming=(await(await fetch(`http://localhost:3000/api/course`, {
    method: 'PATCH',
      next:{
        revalidate:30
      }
    })).json())['data']
   return {upcoming:upcoming}
}


const Training = async() => {
  const data=await getdata() 
  const upcomingcourse=await patchdata() 
  const monthly=await headdata() 

  let month=new Date().getMonth()
  let thismonth=['january', 'February', 'March', 'April','May', 'June', 'July','August','September', 'October','November','December']

  return (
    <div className=' container mx-auto grid gap-[15px] lg:grid-cols-2 lg:w-[1144px]'>
      {/* upcoming programme table part start */}
      <div className=' lg:col-span-2'>
      <div className=' border shadow-lg'>
        <div className=' text-center  p-[16px]'>
          <h1 className=' bg-[#221A88] inline-block p-1'>`Training Program of {thismonth[month]}`</h1>
          <h3 className=' border-b-2 mt-[13px]'></h3>
          </div>

           <div>
           <table className="w-full container mx-auto text-left border-separate border-spacing-2 border border-slate-500">
  <thead>
    <tr>
      <th className='border border-slate-600'>Sl No:</th>
      <th className='border border-slate-600'>Title</th>
      <th className='border border-slate-600'>Duration</th>
      <th className='border border-slate-600'>Participants</th>
     
      <th className='border border-slate-600'>Mode</th>
      <th className='border border-slate-600'>month</th>
    </tr>
  </thead>
  <tbody>
    {monthly.course.map((elm, ind) => {  
      
          
      return (
        <tr key={ind}>
          
          <td className='border border-slate-600 text-center'>{ind+1}</td>
          <td className='border border-slate-600 text-left'>{elm['title']}</td>
          <td className='border border-slate-600 text-center'>{elm['duration']}</td>
          <td className='border border-slate-600 text-center'>{elm['document']}</td>
          <td className='border border-slate-600 text-center'>{elm['mode']}</td>          
          <td className='border border-slate-600 text-center'>{elm['month']}</td>          
         
                  
        </tr>
      );
    })}
  </tbody>
</table>
           </div>

      </div>
      </div>
       {/* upcoming programme table part start */}
       
      {/* ongoing programme table part start */}
      <div className=' border shadow-lg'>
        <div className=' text-center  p-[16px]'>
          <h1 className=' bg-[#221A88] inline-block p-1'>Ongoing Training Program</h1>
          <h3 className=' border-b-2 mt-[13px]'></h3>
          </div>

           <div>
           <table className="w-full container mx-auto text-left border-separate border-spacing-2 border border-slate-500">
  <thead>
    <tr>
      <th className='border border-slate-600'>Sl No:</th>
      <th className='border border-slate-600'>Title</th>
      <th className='border border-slate-600'>Duration</th>
      <th className='border border-slate-600'>Participants</th>
      <th className='border border-slate-600'>Status</th>
    </tr>
  </thead>
  <tbody>
    {data.course.map((elm, ind) => {  
      
          
      return (
        <tr key={ind}>
          
          <td className='border border-slate-600 text-center'>{ind+1}</td>
          <td className='border border-slate-600 text-left'>{elm['title']}</td>
          <td className='border border-slate-600 text-center'>{elm['duration']}</td>
          <td className='border border-slate-600 text-center'>{elm['document']}</td>
          <td className='border border-slate-600 text-center'>{elm['type']}</td>          
        </tr>
      );
    })}
  </tbody>
</table>
           </div>

      </div>
       {/* ongoing programme table part end */}
       {/* upcoming programme table part start */}
      <div>
      <div className=' border shadow-lg'>
        <div className=' text-center  p-[16px]'>
          <h1 className=' bg-[#221A88] inline-block p-1'>Upcoming Training Program</h1>
          <h3 className=' border-b-2 mt-[13px]'></h3>
          </div>

           <div>
           <table className="w-full container mx-auto text-left border-separate border-spacing-2 border border-slate-500">
  <thead>
    <tr>
      <th className='border border-slate-600'>Sl No:</th>
      <th className='border border-slate-600'>Title</th>
      <th className='border border-slate-600'>Duration</th>
      <th className='border border-slate-600'>Participants</th>
      <th className='border border-slate-600'>Status</th>
    </tr>
  </thead>
  <tbody>
    {upcomingcourse.upcoming.map((elm, ind) => {  
      
          
      return (
        <tr key={ind}>
          
          <td className='border border-slate-600 text-center'>{ind+1}</td>
          <td className='border border-slate-600 text-left'>{elm['title']}</td>
          <td className='border border-slate-600 text-center'>{elm['duration']}</td>
          <td className='border border-slate-600 text-center'>{elm['document']}</td>
          <td className='border border-slate-600 text-center'>{elm['type']}</td>          
        </tr>
      );
    })}
  </tbody>
</table>
           </div>

      </div>
      </div>
       {/* upcoming programme table part start */}
      
        
    </div>
  )
}

export default Training
