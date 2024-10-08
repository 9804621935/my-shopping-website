import React from 'react'

const Title = ({label,className}) => {
  return (
    <>
    <h1 className={`text-teal-600 font-semibold text-5xl  mb-2 ${className}`}>
        {label}
    </h1>
      
    </>
  )
}

export default Title
