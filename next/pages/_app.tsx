import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>테스트 입니다</title>
      </Head>
      <div>Header</div>
      <Component {...pageProps} />
      <div>Footer</div>
    </div>
  )
}
