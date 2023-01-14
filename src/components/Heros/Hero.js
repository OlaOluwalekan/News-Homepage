import React, { useState } from "react"
import heroImageMobile from "../../images/image-web-3-mobile.jpg"
import heroImageDesktop from "../../images/image-web-3-desktop.jpg"
import "./hero.css"

const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  window.onresize = () => {
    setWindowWidth(window.innerWidth)
  }

  return (
    <section className='hero'>
      <img
        src={windowWidth < 800 ? heroImageMobile : heroImageDesktop}
        alt='hero'
        className='hero-image'
      />
      <div className='row'>
        <h2>The Bright Future of Web 3.0?</h2>
        <div className='column'>
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button>read more</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
