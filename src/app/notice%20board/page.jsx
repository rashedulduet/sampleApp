import React from 'react'
import PlainLayout from '../components/PlainLayout'
import Link from 'next/link'

async function getdataa(){
    const doc=(await(await fetch(`http://localhost:3000/api/noticeboard`, {
      next:{
        revalidate:30
      }
    })).json())['data']
     return {doc:doc}
  }
  function extractFileId(url) {
    const regex = /https:\/\/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)\/view/;
    const match = url.match(regex);
    if (match) {
        return match[1];
    } else {
        return null;
    }
}
const page = async() => {
    const dataa=await getdataa() 
    console.log(dataa.doc)
     
  return (
    <PlainLayout>
             <div className=' container  mx-auto'>
             <table className="w-full text-left ">
  <thead>
    <tr>
      <th className=' text-center border-separate border-spacing-2 border border-slate-500'>Sl No</th>
      <th className=' border-separate border-spacing-2 border border-slate-500'>Title</th>
      <th className='border-separate border-spacing-2 border border-slate-500'>Created Date</th>
      <th className='border-separate border-spacing-2 border border-slate-500'>Download</th>
    </tr>
  </thead>
  <tbody>
    {dataa.doc.map((elm, ind) => {
      const url = `${elm['document']}`;
      const fileId = extractFileId(url);
      const dateString = elm['createdAt'];
      const date = new Date(dateString);
// Extract year, month, and day
const year = date.getUTCFullYear();
const month = date.getUTCMonth() + 1; // Months are zero-based
const day = date.getUTCDate();

// Format the date as YYYY-MM-DD
const formattedDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  
      
      return (
        <tr key={ind}>
          <td className=' text-center border-separate border-spacing-2 border border-slate-500'>{ind+1}</td>
          <td className='border-separate border-spacing-2 border border-slate-500'>{elm['title']}</td>
          <td className='border-separate border-spacing-2 border border-slate-500'>{formattedDate}</td>        
          <td className='border-separate border-spacing-2 border border-slate-500'>
            <Link href={`https://drive.google.com/uc?export=download&id=${fileId}`}>
              <img src="../image/pdf.png" height="50px" width="50px" alt="PDF icon"/>
            </Link>
          </td>
        </tr>
      );
    })}
  </tbody>
</table>

             </div>
 
    </PlainLayout>
  )
}

export default page
