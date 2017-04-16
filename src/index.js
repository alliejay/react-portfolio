import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './styles/index.scss'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
          <div>
            Testing
          </div>
  )
  }

}

App.propTypes = {
  history: React.PropTypes.object //.isRequired
}

// commented out location: https://github.com/ReactTraining/react-router/issues/4018 && https://github.com/ReactTraining/react-router/pull/4067
const NoMatch = (/*{ location }*/) => (
<div>
<h2>Whoops</h2>
<p>Sorry but {location.pathname} didn’t match any pages</p>
</div>
)


ReactDOM.render(<App/>, document.querySelector('.wrapper'))
