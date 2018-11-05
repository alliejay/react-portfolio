import React from 'react'

const IconLinkedIn = React.createClass({
  render() {
    return (
      <svg className="portfolio-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <title id={this.props.iconTitle}>Icon LinkedIn</title>
        <path d="M1,6h4v13H1V6z M3,1C1.8,1,1,2,1,3.1C1,4.1,1.8,5,3,5c1.3,0,2-0.9,2-2C5,1.9,4.2,1,3,1z M14.6,6.2
	c-2.1,0-3.3,1.2-3.8,2h-0.1l-0.2-1.7H6.9C6.9,7.6,7,8.9,7,10.4V19h4v-7.1c0-0.4,0-0.7,0.1-1c0.3-0.7,0.8-1.6,1.9-1.6
	c1.4,0,2,1.2,2,2.8V19h4v-7.4C19,7.9,17.1,6.2,14.6,6.2z"/>
      </svg>
    )
  }
})

export default IconLinkedIn