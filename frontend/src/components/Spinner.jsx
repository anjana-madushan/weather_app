import React from 'react'

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-20 w-20 border-t-8 border-orange-300 border-solid"></div>
    </div>
  )
}

export default Spinner