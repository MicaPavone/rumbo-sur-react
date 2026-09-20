import Layout from '../components/Layout.jsx'
import Hero from '../components/Hero.jsx'
import Destinations from '../components/Destinations.jsx'
import Gallery from '../components/Gallery.jsx'
import Contact from '../components/Contact.jsx'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Destinations />
      <Gallery />
      <Contact />
    </Layout>
  )
}
