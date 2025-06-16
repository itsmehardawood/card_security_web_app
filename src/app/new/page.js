'use client'
import React, { useState } from 'react'

function LikeApp() {
    const [Like, setLike] = useState(0)

    const handlelikes = () =>{
      return setLike(Like+1)
    } 


  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center'>
      <div className='h-56 w-96 bg-red-600'></div>
      <button onClick={handlelikes} className='text-blue-500 text-left'>Like {Like}</button>
    </div>
  )
}

export default LikeApp
