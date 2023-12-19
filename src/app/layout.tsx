import type { Metadata } from 'next'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'H & S Energy',
  description: 'hnsenergyproducts.com',
}

export default function RootLayout({
  children,
}: any) {
  return (
    <html lang="en">
      <ToastContainer/>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
