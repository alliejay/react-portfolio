import React, { Component } from 'react'
import { Match } from 'react-router'
import Homepage from 'Homepage'
import About from 'About'
import Resume from 'Resume'
import Portfolio from 'Portfolio'
import Contact from 'Contact'
import Header from 'Header'
import Footer from 'Footer'
import './styles.scss'

class LayoutWrapper extends Component {
  constructor(props)  {
    super(props)
  }

  render () {
    return (
      <div>
        <div className="header">
          <Header />
        </div>

        <div className="content">
          <Match exactly pattern="/" component={Homepage} />
          <Match exactly pattern="/about" component={About} />
          <Match exactly pattern="/resume" component={Resume} />
          <Match exactly pattern="/contact" component={Contact} />
          <Match exactly pattern="/portfolio" component={Portfolio} />
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    )
  }
}

export default LayoutWrapper