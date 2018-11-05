import React, { Component } from 'react'
import PortfolioItems from 'PortfolioItems'
import { PORTFOLIO_ITEMS } from 'services/portfolioService'
import './styles.scss'

class Portfolio extends Component {
  constructor(props)  {
    super(props)
  }

  render () {
    return (
      <div>
        <div className="portfolio-wrapper">
          <p>Below is a listing of the assignments and projects I worked on while at The Iron Yard. With each, I've included the goal of the assignment, any challenges our instructors (intentionally) threw our way, and my own personal experience as well. Each screenshot will take you to either the deployed application or to its GitHub repo.</p>
          <p>
            In addition, my resume can be downloaded in PDF format here: <a href="src/components/resume/resume.pdf" download="./resume.pdf">RESUME</a>
          </p>
        </div>
        <PortfolioItems data={PORTFOLIO_ITEMS} />
      </div>
    )
  }
}

export default Portfolio