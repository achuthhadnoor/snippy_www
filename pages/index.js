import Head from 'next/head'
import Link from 'next/link'
import { Logo } from '../components'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Snippy | Instantly save todos,bookmarks,screenshots</title>
      </Head>
      <header style={{ zIndex: 2, display: 'flex', maxWidth: '1080px', width: '100%', alignItems: 'center' }}>
        <span style={{ padding: '10px' }}><Logo /></span>
        <span style={{ flex: 1 }} />
        <nav style={{ display: 'flex', fontSize: '1.2em' }}>
          <Link href="/about"><a style={{ padding: '20px' }}>About</a></Link>
          <Link href="/download"><a style={{ padding: '20px' }}>Download</a></Link>
        </nav>
      </header>
      <main className={styles.main}>
        <div className={styles.main_heading}>
          <div style={{ display: 'flex', justifyContent: 'center', margin: '2em .2em', alignItems: 'center' }}>
            <span style={{ background: '#ffffff26', borderRadius: '1em', margin: '10px 20px' }}><Logo /></span><h1 className={styles.title}>Snippy</h1>
          </div>
          <h1 className={styles.title}>
            Log your information to one place from anywhere on internet
            </h1>
          <h2 className={styles.description}>
            Snippy allows you to <i>save and collaborate</i> on  your <b><i>tasks, bookmarks and screenshots</i></b> from anywhere on the internet
            </h2>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a href="/"> <button className={styles.primary_btn}>Get your handle </button></a>
            <button className={styles.secondary_btn}> Join our discord </button>
          </div>
        </div>
      </main>
      <div className={styles.mocks}>
        <div className={styles.mobile_mock}></div>
        <div className={styles.desktop_mock}></div>
      </div>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Logo />
        </a>
      </footer>
    </div>
  )
}
