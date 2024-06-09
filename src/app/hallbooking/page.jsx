import React from 'react'
import FormComponent from '../components/FormComponent'
import PlainLayout from '../components/PlainLayout'
import { Toaster } from 'react-hot-toast'

const page = () => {
  return (
    <PlainLayout>
      <FormComponent/>
      <Toaster/>
    </PlainLayout>
  )
}

export default page
