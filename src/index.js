import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router'
import LayoutWrapper from 'LayoutWrapper'

import './styles/index.scss'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <BrowserRouter history={history}>
        <LayoutWrapper />
      </BrowserRouter>
  )
  }

}

ReactDOM.render(<App/>, document.querySelector('.wrapper'))
