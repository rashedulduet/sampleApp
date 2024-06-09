import React from 'react'
import PlainLayout from '../components/PlainLayout'
import Hero from '../components/Hero'
import Event from '../components/Event'
import Booking from '../components/Booking'

const page = () => {
  return (
    <PlainLayout>
      <Hero/>
      <Booking/>
     <Event/>
     
    </PlainLayout>
  )
}

export default page
