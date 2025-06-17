import React from 'react'
import { useData } from '../Context/UserContext'

function Details() {

  const {Id, Password} = useData();
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='m-7 font-medium'>Details of the Candidate:</h1>
        <h2 className='m-3 font-mono'>UserID: {Id}</h2>
        <h2 className='font-mono'>Password: {Password}</h2>
    </div>
  )
}

export default Details