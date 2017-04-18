import React from 'react'

const IconPalette = React.createClass({
  render() {
    return (
      <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <title id={this.props.iconTitle}>Palette Icon</title>
        <path d="M15.74 2.608c-3.528-1.186-7.066-.96-10.72 1.274C2.167 5.625.302 9.958.917 13.064c.728 3.67 4.35 5.995 9.243 4.65 5.275-1.448 6.55-4.545 6.38-5.333-.17-.787-2.666-1.65-1.72-3.497 1.19-2.313 3.13-1.15 3.983-1.622.855-.47.54-3.44-3.063-4.652zm-3.646 10.706c-.798.218-1.623-.256-1.843-1.06-.22-.804.25-1.63 1.047-1.848.798-.218 1.622.254 1.843 1.06.22.802-.248 1.63-1.046 1.848z"/>
      </svg>
    )
  }
})

export default IconPalette