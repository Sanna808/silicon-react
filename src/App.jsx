import './App.css'
import AppFeatures from './components/AppFeatures'
import Brands from './components/Brands'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import CarouselSection from './components/CarouselSection'
import Payments from './components/Payments'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import Subscribe from './components/Subscribe'

function App() {

  return (
    <div className="wrapper">
      <Header />
      <main>
        <Hero />
        <Brands />
        <AppFeatures />
        <CarouselSection />
        <Payments />
        <Reviews />
        <FAQ />
        <Subscribe />
      </main>
      <Footer />
    </div>
  )
}

export default App
