import Image from 'next/image'
import NavBar from '@/Components/NavBar/NavBar'
import Footer from '@/Components/Footer/Footer'
import MainContent from '@/Components/MainContent/MainContent'
import Script from 'next/script'
export default function Home() {
  return (
    <main className='overflow-hidden'>
      <h1 className='hidden'>Welcome to Pizza Towns</h1>
      <MainContent/>
    </main>
  )
}
