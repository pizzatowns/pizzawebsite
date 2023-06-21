import Image from 'next/image'
import NavBar from '@/Components/NavBar/NavBar'
import Footer from '@/Components/Footer/Footer'
import MainContent from '@/Components/MainContent/MainContent'
export default function Home() {
  return (
    <main>
      <NavBar/>
      <MainContent/>
      <Footer/>
    </main>
  )
}
