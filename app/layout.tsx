import type { Metadata } from 'next'
import './globals.css'


export const metadata = {
  title: 'Chaticon',
  description: 'Chat Applicarion with Next.js, TailwindCSS, and Socket.io',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
