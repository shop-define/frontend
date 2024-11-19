import React, { Suspense } from 'react'
import './styles/globals.css'
import LoadingScreen from './components/loading-screen/loading-screen'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <link rel='icon' type='image/svg+xml' href='/src/assets/logo.svg' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Минимаркет</title>
      </head>
      <body className='body'>
        <Suspense fallback={<LoadingScreen />}>
          {children}
          {/* <main className='root'>{children}</main> */}
        </Suspense>
      </body>
    </html>
  )
}
