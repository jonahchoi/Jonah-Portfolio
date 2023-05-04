import '@/styles/globals.css'
import '@/styles/styles.css'

export const metadata = {
  title: 'Jonah Choi',
  description: 'Jonah Choi\'s Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Jonah Choi</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
