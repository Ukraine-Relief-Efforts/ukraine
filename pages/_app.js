import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { appWithTranslation } from 'next-i18next';

import * as ga from '../lib/ga'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp)
