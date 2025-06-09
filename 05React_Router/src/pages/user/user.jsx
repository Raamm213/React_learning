import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { id } = useParams();
    return (
      <div className='w-full text-black text-3xl text-center py-5'>user : {id}</div>
    )
}

export default User