import React, { Component } from 'react'
import PortfolioItems from 'PortfolioItems'
import { items } from './items'
import './styles.scss'

class Portfolio extends Component {
  constructor(props)  {
    super(props)
  }

  render () {
    return (
      <div>
        <h5>The following projects were completed during my time at The Iron Yard.</h5>
        <PortfolioItems data={items} />
      </div>
    )
  }
}

export default Portfolio