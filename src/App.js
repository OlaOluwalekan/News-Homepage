import React from "react"
import Header from "./components/Header/Header"
import "./App.css"
import Hero from "./components/Heros/Hero"
import New from "./components/New/New"
import { useGlobalContext } from "./context"
import Services from "./components/Services/Services"
import Footer from "./components/Footer/Footer"

const App = () => {
  const { navIsOpen } = useGlobalContext()

  return (
    <div className={`app ${navIsOpen && "set-app"}`}>
      <Header />
      <main>
        <section className='section-1'>
          <Hero />
          <New />
        </section>
        <Services />
      </main>
      <Footer />
    </div>
  )
}

export default App
