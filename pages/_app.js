import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { appWithTranslation } from 'next-i18next';

import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp)
