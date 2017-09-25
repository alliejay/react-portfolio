import React, { Component } from 'react'
import PortfolioItems from 'PortfolioItems'
import { items } from './items'
import './styles.scss'

class Portfolio extends Component {
  constructor(props)  {
    super(props)
  }

  render () {
    return <PortfolioItems data={items} />
  }
}

export default Portfolio