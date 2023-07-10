import Image from 'next/image'
import Container from '../components/Container'

import '../app/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '404',
  description: 'An example next app',
}

export default function Home() {
  return (
    <main className="flex min-h-screen items-center flex-col p-24">
        <h1>Oopsy, an error has occurred</h1>
      <div>
        <Image
          src="/error.jpg"
          alt="Next.js Logo"
          width={225}
          height={300}
          priority
        />
      </div>
    </main>
  )
}
