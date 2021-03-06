import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="A master's student from Espoo, Finland. Check out all the cool stuff I've done!"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Patrik Marin" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* -- Structured data -- */}

        <meta property="og:type" content="profile" />
        <meta property="og:title" content="Patrik Marin" />
        <meta property="og:url" content="https://patrikmarin.fi" />
        <meta
          property="og:image"
          content="https://patrikmarin.fi/static/media/cv_round_small_zoom.e0451d71.png"
        />
        <meta property="profile:first_name" content="Patrik" />
        <meta property="profile:last_name" content="Marin" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'http://schema.org/',
              '@type': 'Person',
              name: 'Patrik Marin',
              jobTitle: 'Software Engineer',
              url: 'https://patrikmarin.fi',
              email: 'mailto:hello@patrikmarin.fi',
              birthDate: '1995-06-08',
              nationality: 'Finnish',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Espoo',
                addressRegion: 'Finland',
              },
            }),
          }}
        />

        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,700|Montserrat:300,400,700|Raleway:200"
          rel="stylesheet"
        />

        <title>Patrik Marin</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.backgroundImageContainer}>
        <div className={styles.backgroundImage}>
          <Image src="/bg.jpg" layout="fill" />
        </div>
      </div>
      <main className={styles.content}>
        <div className={styles.hero}>
          <Image src="/Logo_white.svg" alt="Patrik Marin Logo" layout="fill" />
        </div>
        <h1>
          UNDER
          <br />
          <span>CONSTRUCTION</span>
        </h1>
      </main>
    </div>
  )
}
