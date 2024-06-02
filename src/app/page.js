import React from 'react'
import PlainLayout from './components/PlainLayout'

import Hero from './components/Hero'
import Booking from './components/Booking'
import Event from './components/Event'


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
