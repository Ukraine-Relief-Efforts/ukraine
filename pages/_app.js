import { useEffect } from 'react'
import { useRouter } from 'next/router'

import * as ga from '../lib/ga'
import '../lib/i18n/config'
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

export default MyApp
