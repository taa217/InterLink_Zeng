import './globals.css'
//import { Inter } from 'next/font/google'

//const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'InterLink',
  description: 'Help everyone with career guidance',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
