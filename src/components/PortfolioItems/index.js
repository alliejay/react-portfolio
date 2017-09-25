import React from 'react'
import Image from 'Image'
import IconGithub from 'icons/github'
import './styles.scss'

const PortfolioItems = (props) => {

  const { data } = props

  let projectCards = data.map((obj) => {
    return(
        <div className="portfolio-item clearfix" key={obj.id}>
          <section className="title col col-12">
            <h3>{obj.title}</h3>
            <span><IconGithub iconTitle="Github" alt="Github Link" /></span>
          </section>

          <section className="image col-4">
            <Image src={obj.mainImg} width="501px" height="300px" mode="fill" className="screenshot" />
          </section>

          <section className="description col-6 right">
            <ul>
              <li><b>Goal:</b> {obj.goal}</li>
              <li><b>Challenge:</b> {obj.challenge}</li>
              <li><b>Personal Experience:</b> {obj.personalExp}</li>
            </ul>
          </section>
        </div>
    )
  })

  return (
    <div>{projectCards}</div>
  )

}

export default PortfolioItems

