import React from 'react'
import MenuBar from './MenuBar'
import Footer from './Footer'

const PlainLayout = (props) => {
  return (
    <div>
        <MenuBar/>
        {props.children}
        <Footer/>
      
    </div>
  )
}

export default PlainLayout
