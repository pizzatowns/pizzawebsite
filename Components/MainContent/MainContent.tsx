import React from 'react'
import SlideAds from './SlideAds/SlideAds'
import CardFeature from './CardFeature/CardFeature'
import TopSelling from './TopSelling/TopSelling'

export default function MainContent() {
  return (
    <div>
        <SlideAds/>
        <CardFeature/>
        <TopSelling/>
    </div>
  )
}
