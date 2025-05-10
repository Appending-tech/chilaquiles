import Footer from '@/components/footer'
import MetaHead from '@/components/meta-head'
import Navbar from '@/components/navbar'
import Principal from '@/components/principal'

export default function Home() {
  return (
    <>
      <MetaHead title="Home" />
      <Navbar />
      <section>
        <Principal />
      </section>
      <Footer />
    </>
  )
}
