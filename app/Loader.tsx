import React, {useEffect} from 'react'

const Loader = () => {
  useEffect(() => {
    const timer = setTimeout(() => {

    }, 4000);
    return () => clearTimeout(timer)
  })
  return (
    <div className='w-full h-screen flex justify-center items-center'>

    I am the loader
    </div>
  )
}



export default Loader