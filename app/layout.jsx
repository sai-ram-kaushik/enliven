import Navbar from "@/components/Navbar"
import { Inter } from 'next/font/google'
import "@/styles/globals.css"
import Provider from "@/components/Provider"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Enliven',
  description: 'A mental health platform catering to children',
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Navbar />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}
