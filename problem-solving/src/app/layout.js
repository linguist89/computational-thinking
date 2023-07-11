import './globals.css'

export const metadata = {
  title: 'Problem Solving Course',
  description: 'A course to develop problem solving skills',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
