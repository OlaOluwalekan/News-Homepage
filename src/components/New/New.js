import React from "react"
import { newData } from "../../data"
import "./new.css"

const New = () => {
  return (
    <section className='new'>
      <h2>New</h2>
      {newData.map((item, i) => {
        const { title, paragraph } = item
        return (
          <article key={i}>
            <h4>{title}</h4>
            <p>{paragraph}</p>
            {i < 2 && <div></div>}
          </article>
        )
      })}
    </section>
  )
}

export default New
