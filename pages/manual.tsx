import Image from 'next/image'
import Container from '../components/Container'

import '../app/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Manual',
  description: 'Manual on how to use the app',
}

export default function Home() {
  return (
    <main className="flex min-h-screen items-center flex-col p-24">
        <h1>Manual</h1>
        <h2>Manual</h2>
        <h3>Manual</h3>
        <h4>Manual</h4>
        <h5>Manual</h5>
    </main>
  )
}
