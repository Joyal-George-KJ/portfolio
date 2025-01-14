import React from 'react'
import ButtonContact from './ButtonContact'

function Main() {
  return (
    <div className={`flex justify-center items-center flex-col h-[88vh] px-32`}>
        <h1 className='text-6xl font-mono font-bold text-neutral-200'>Joyal George K J</h1>
        <h2 className='text-3xl font-mono font-bold text-neutral-200 pt-8'>React JS Developer</h2>
        <ButtonContact />
    </div>
  )
}

export default Main