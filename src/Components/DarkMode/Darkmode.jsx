import React, { useState } from 'react'
import './Darkmode.css'
import { Asstes } from '../../assets/Asstes'

const Darkmode = () => {
  const [set, setset] = useState(true)

  const change=()=>{
    setset(!set)
  }
  return (
    <div >
      <div onClick={change} className="mode">
        {set? <span ><img src={Asstes.sun} className='bright' /></span>: <span ><img src={Asstes.moon} className='dark' /></span>}
      </div>
    </div>
  )
}

export default Darkmode
