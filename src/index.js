import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router'
import RouteWrapper from 'RouteWrapper'

import './styles/index.scss'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <BrowserRouter history={history}>
        <RouteWrapper />
      </BrowserRouter>
  )
  }

}

ReactDOM.render(<App/>, document.querySelector('.wrapper'))
