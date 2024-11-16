import './styles/globals.css'
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <link rel='icon' type='image/svg+xml' href='/logo.svg' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Минимаркет</title>
      </head>
      <body className='body'>
        <main className='root'>{children}</main>
      </body>
    </html>
  )
}
