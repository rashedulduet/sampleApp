import React from 'react'
// api of booking seat
async function seatdata(){
  const seat=(await(await fetch(`http://localhost:3000/api/seat`, {    
      next:{
        revalidate:30
      }
    })).json())['data']
   return {seat:seat}
}

// api of course 
async function getdata(){
  const course=(await(await fetch(`http://localhost:3000/api/course`, {
    method: 'PUT',
      next:{
        revalidate:30
      }
    })).json())['data']
    const seat=(await(await fetch(`http://localhost:3000/api/seat`, {
      method: 'PUT',
        next:{
          revalidate:30
        }
      })).json())['data']
   return {course:course, seat:seat}
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


const Event = async() => {
  const data=await getdata() 
  const upcomingcourse=await patchdata() 
  const seatdataa=await seatdata() 
  let total=data.seat._sum.TotalSeat
  let occupied=data.seat._sum.OccupiedSeat
  let remainseat=total-occupied
  
  let date=new Date() //for date
  let month=['january', 'February', 'March', 'April','May', 'Jun', 'July','August','September', 'October','November','December']



  return (
    <div className=' container mx-auto grid gap-[30px] lg:grid-cols-2 lg:w-[1144px]'>
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
       {/* Status of Hostel seat start */}
       <div>
      <div className=' border shadow-lg'>
        <div className=' text-center  p-[16px]'>
          <h1 className=' bg-[#221A88] inline-block p-1'>{`Status of GTC Hostel as on ${date.getDate()}-${month[date.getMonth()+1]}-${date.getFullYear()}`}</h1>
          <h3 className=' border-b-2 mt-[13px]'></h3>
          </div>

           <div>
           <table className="w-full container mx-auto text-left border-separate border-spacing-2 border border-slate-500">
  <thead>
    <tr>
      <th className='border border-slate-600'>Seat Type</th>
      <th className='border border-slate-600'>Occupied Seat</th>
      <th className='border border-slate-600'>Vacant Seat</th>
      <th className='border border-slate-600'>Total Seat</th>      
    </tr>
  </thead>
  <tbody>
    {seatdataa.seat.map((elm, ind) => {  
    
          
      return (
        <tr key={ind}>
          
          <td className='border border-slate-600 text-center'>{elm['SeatType']}</td>
          <td className='border border-slate-600 text-center'>{elm['OccupiedSeat']}</td>
          <td className='border border-slate-600 text-center'>{parseInt(elm['TotalSeat'])-parseInt(elm['OccupiedSeat'])}</td>
          <td className='border border-slate-600 text-center'>{elm['TotalSeat']}</td>
                  
        </tr>
      );
    })}
    <tr>
          
          <td className='border border-slate-600 text-center'>Total</td>
          <td className='border border-slate-600 text-center'>{data.seat._sum.OccupiedSeat}</td>
          <td className='border border-slate-600 text-center'>{remainseat}</td>
          <td className='border border-slate-600 text-center'>{data.seat._sum.TotalSeat}</td>
                  
        </tr>
  </tbody>
</table>
           </div>

      </div>
      </div>
      {/* Status of Hostel seat end */}
         {/* Status of Hostel seat start */}
         <div>
      <div className=' border shadow-lg'>
        <div className=' text-center  p-[16px]'>
          <h1 className=' bg-[#221A88] inline-block p-1'>Latest News</h1>
          <h3 className=' border-b-2 mt-[13px]'></h3>
          </div>

          <div className='liDec text-[#337ab7]'>  
    <ul>
      <li ><a href="http://www.pmo.gov.bd" target="_blank" class="">Certificate of Foundation Training of SAE Released</a></li>
      <li ><a href="http://www.cabinet.gov.bd/index.php?lang=bn" target="_blank" class="">Advertising of Tender for Repairing work of Two Storage Building </a></li>
      <li ><a href="http://mopa.gov.bd/en" target="_blank" class="">Advertising of Tender for Repairing work of Curtain</a></li>
      <li><a href="http://www.bpatc.org.bd" target="_blank" class="">Notice of May day</a></li>
      <li><a href="http://biam.gov.bd/" target="_blank">Notice for Fire Drill</a><a href="http://www.bcsadminacademy.gov.bd/" target="_blank">Notice for course pospond </a></li>
      <li><a href="http://basa.org.bd/" target="_blank">Advertising of Tender for wifi system</a></li>
      <li><a href="http://www.bangladesh.gov.bd/" target="_blank">Notice for Industrial Training </a></li>
    </ul> 
     </div>

      </div>
      </div>
      {/* Status of Hostel seat end */}
    </div>
  )
}

export default Event
