
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { BackToTop } from "./components/BackToTop"
import { Hero } from "./components/Hero"
import { Services } from "./components/Services"
import { About } from "./components/About"
// import { Blog } from "./components/Blog"
import { FAQ } from "./components/FAQ"
import { Contact } from "./components/Contact"
import  {WhatsAppButton } from "./components/WhatsAppButton"

function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <section id="hero">
          <Hero />
        </section>
        <section id="servicos">
          <Services />
        </section>
        <section id="sobre">
          <About />
        </section>
        {/* <section id="blog">
          <Blog />
        </section> */}
        <section id="faq">
          <FAQ />
        </section>
        <section id="contato">
          <Contact />
        </section>
      </main>
      <WhatsAppButton />
      <BackToTop />
      <Footer />
    </div>
  )
}

export default App
