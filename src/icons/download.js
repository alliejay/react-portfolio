import React from 'react'

const IconDownload = React.createClass({
  render() {
    return (
      <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <title id={this.props.iconTitle}>Icon Download</title>
        <path d="M15 7h-3V1H8v6H5l5 5 5-5zm4.338 6.532c-.21-.224-1.61-1.723-2.01-2.114-.266-.26-.645-.418-1.043-.418h-1.757l3.064 2.994h-3.544c-.102 0-.194.052-.24.133L12.992 16H7.008l-.816-1.873c-.046-.08-.14-.133-.24-.133H2.408L5.47 11H3.716c-.397 0-.776.16-1.042.418-.4.392-1.8 1.89-2.01 2.114-.49.52-.76.936-.63 1.45l.56 3.073c.128.514.69.936 1.252.936h16.312c.56 0 1.124-.42 1.252-.935l.56-3.074c.126-.512-.142-.927-.632-1.448z"/>
      </svg>
    )
  }
})

export default IconDownload