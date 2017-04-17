import React, { Component } from 'react'
import { Match, Redirect } from 'react-router'
import Homepage from 'Homepage'
import About from 'About'
import Resume from 'Resume'
import Portfolio from 'Portfolio'
import Contact from 'Contact'

class RouteWrapper extends Component {
  constructor(props)  {
    super(props)
  }

  render () {
    return (
      <div>
        <Match exactly pattern="/" component={Homepage} />
        <Match exactly pattern="/about" component={About} />
        <Match exactly pattern="/resume" component={Resume} />
        <Match exactly pattern="/contact" component={Contact} />
        <Match exactly pattern="/portfolio" component={Portfolio} />
      </div>
    )
  }
}

export default RouteWrapper