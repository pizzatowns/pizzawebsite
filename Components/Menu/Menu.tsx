import React from 'react'
import MenuNavBar from './MenuNavBar'
import SubMenu from './SubMenu'

export default function Menu() {
  return (
    <div className='flex flex-col'>
        <MenuNavBar/>
        <SubMenu/>
    </div>
  )
}
