// 'use client';
// import './globals.css'
// import { Poppins } from '@next/font/google'
// import { ThemeProvider } from 'next-themes'
// import { Analytics } from '@vercel/analytics/react';

// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['300', '400', '500', '600', '700', '800'],
//   variable: '--font-poppins'
// })

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <head />
//       <ThemeProvider attribute='class' defaultTheme='light'>
//         <body className={`${poppins.className} font-poppins bg-gray-100/50 dark:bg-grey-900 text-black dark:text-white overflow-x-hidden`}>
//           {/* <body className='bg-gray-100/50 dark:bg-grey-900 text-black dark:text-white overflow-x-hidden'> */}
//           {children}
//           <Analytics />
//         </body>
//       </ThemeProvider>
//     </html>
//   )
// }

'use client';
import './globals.css'
import { Poppins } from '@next/font/google'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/react'
import { useEffect, useState } from 'react'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null // Evita el renderizado antes de que el cliente esté listo
  }

  return (
    <html lang="en">
      <head />
      <ThemeProvider attribute='class' defaultTheme='light'>
        <body className={`${poppins.className} font-poppins bg-gray-100/50 dark:bg-grey-900 text-black dark:text-white overflow-x-hidden`}>
          {children}
          <Analytics />
        </body>
      </ThemeProvider>
    </html>
  )
}

