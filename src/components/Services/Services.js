import React from "react"
import { servicesData } from "../../data"
import "./services.css"

const Services = () => {
  return (
    <section className='services'>
      {servicesData.map((service) => {
        const { id, image, name, text } = service
        return (
          <article className='single-service'>
            <img src={image} alt={name} />
            <div>
              <h3>0{id}</h3>
              <h5>{name}</h5>
              <p>{text}</p>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default Services
