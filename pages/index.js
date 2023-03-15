import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ygraeria Kykladon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="ΥΓΡΑΕΡΙΑ ΚΥΚΛΑΔΩΝ Α.Β.Ε.Ε." />
        <p className="description">
          ΕΜΠΟΡΙΑ ΥΓΡΑΕΡΙΟΥ
        </p>

        <p className="description">
          ΒΟΘΩΝΑΣ Τ.Θ. 48, Τ.Κ. 84600, ΜΥΚΟΝΟΣ
        </p>

        <p className="description">
          Τηλ.: 2289022168 & 2289028030 - Fax: 2289028031
        </p>

        <p className="description">
          email: info@ygraeria.com
        </p>


      </main>

      <Footer />
    </div>
  )
}
