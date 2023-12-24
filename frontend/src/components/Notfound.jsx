import React from 'react'

const NotFound = () => {
  return (
    <>
        <div className='bg-light mx-auto'>
        <h1 className='text-muted text-center mt-5'>Oops! Something Went Wrong </h1>
        <div className='container mx-auto bg-light  d-flex justify-content-center' >
           <img className='error' src="https://cdni.iconscout.com/illustration/premium/thumb/no-search-found-2511608-2133696.png" alt="" />
        </div>
        </div>
    </>
  ) 
}

export default NotFound