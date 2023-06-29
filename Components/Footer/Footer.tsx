import React from 'react'
import StartOrder from './StartOrder'
import Privacy from './Privacy'
import BodyFooter from './BodyFooter'

export default function Footer() {
  return (
    <div className='flex flex-col'>
      <StartOrder/>
      <BodyFooter/>
      <Privacy/>
    </div>
  )
}
