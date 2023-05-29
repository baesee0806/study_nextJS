import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>테스트 입니다</title>
      </Head>
      <div>Header</div>
      <div>
        <h2>Navigation</h2>
        <Link href={'/about'}>About</Link>
        <div onClick={()=>{
          router.push('/about')
        }}>About router</div>
        <br />
        <Link href={'/'}>index</Link>
        <div onClick={()=>{
          router.push('/')
        }}>index router</div>
      </div>
      <Component {...pageProps} />
      <div>Footer</div>
    </div>
  )
}
