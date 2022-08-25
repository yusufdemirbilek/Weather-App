import React from 'react'
import Weather from './Weather'
import Dropdown from './Dropdown'
function Container() {
  return (
    <div className='container'>
        <Dropdown></Dropdown>
        <Weather></Weather>

    </div>
  )
}

export default Container