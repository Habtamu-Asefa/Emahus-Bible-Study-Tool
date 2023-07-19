export const metadata = {
  title: 'Emahus',
  description: 'The perfect Bible app for study',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body style={{backgroundColor: 'black', padding: 0, margin: 0}}>{children}</body>
    </html>
  )
}
