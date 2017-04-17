import React from 'react'

const IconBriefcase = React.createClass({
  render() {
    return (
      <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <title id={this.props.iconTitle}>Briefcase Icon</title>
        <path d="M9 10h2v2h9s-.15-4.46-.2-5.854C19.75 4.82 19.275 4 17.8 4h-3.208l-1.197-2.256C13.065 1.12 12.95 1 12.215 1H7.784c-.735 0-.847.12-1.18.744-.164.31-.7 1.318-1.195 2.256h-3.21C.724 4 .255 4.82.2 6.146.146 7.473 0 12 0 12h9v-2zM7.65 2.916c.23-.432.307-.516.816-.516h3.067c.51 0 .588.084.816.516L12.923 4h-5.85l.575-1.084zM11 15H9v-2H.5s.124 1.797.2 3.322C.73 16.955.916 18 2.5 18h15c1.582 0 1.765-1.047 1.8-1.678.087-1.568.2-3.322.2-3.322H11v2z"/>
      </svg>
    )
  }
});

export default IconBriefcase