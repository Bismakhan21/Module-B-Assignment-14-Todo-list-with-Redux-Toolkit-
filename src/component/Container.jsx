import React from 'react'
import '../App.css'

function Container(props) {
  return (
    <div className='container mx-auto'>{props.children}</div>
  )
}

export default Container