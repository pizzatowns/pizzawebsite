import React from 'react'
import SlideAds from './SlideAds/SlideAds'
import CardFeature from './CardFeature/CardFeature'
import PopularItems from '../PopularItems/PopularItems'

export default function MainContent() {
  return (
    <div className='flex flex-col'>
        <SlideAds/>
        <CardFeature/>
        <PopularItems/>
    </div>
  )
}
