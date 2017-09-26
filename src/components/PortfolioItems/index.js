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
            <h4>{obj.title}</h4>
            <span className="github-link">
              <a href={obj.url} target="_blank">
                <IconGithub iconTitle="Github" alt="Github Link" />
                <h5>View on Github</h5>
              </a>
            </span>
          </section>

          <section className="image col-4">
            <a href={obj.url} target="_blank">
              <Image src={obj.mainImg} width="501px" height="300px" mode="fill" className="screenshot" />
            </a>
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

