'use client'

import { store } from './store'
import { Provider } from 'react-redux'

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className="min-w-[320px] bg-white font-sans text-black antialiased">
          {children}
        </body>
      </html>
    </Provider>
  )
}
