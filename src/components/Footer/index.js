import React, { Component } from 'react'
import './styles.scss'

class Footer extends Component {
  constructor(props)  {
    super(props)
  }

  render () {
    return (
      <div className="footer-text">
        <h6>© Allie J. Arsenault 2017</h6>
        <h6>Entypo+ pictograms by Daniel Bruce.</h6>
      </div>
    )
  }
}

export default Footer