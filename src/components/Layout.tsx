import { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ProgressBar from './ProgressBar'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-primary-black text-white font-primary antialiased">
      <ProgressBar />
      <Navbar />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout 