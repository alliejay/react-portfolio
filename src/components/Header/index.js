import React, { Component } from 'react'
import Link from 'react-router/Link'
import 'styles.scss'

class Header extends Component {

  constructor(props) {
    super(props)

  }

  navItems = () => {
    return [
      {
        text: "About",
        route: "/about"
      },
      {
        text: "Resume",
        route: "/resume"
      },
      {
        text: "Portfolio",
        route: "/portfolio"
      },
      {
        text: "Contact",
        route: "/contact"
      }
    ].filter((i) => i.text !== "none")
  }

  renderNav = (navItems) => {
    return navItems.map((i, index) => {
      return (
        <Link key={index} to={i.route}>
          <span className="pointer">{i.text}</span>
        </Link>
      )
    })
  }

  render () {
    const items = this.renderNav(this.navItems())

    return (
      <div className="header-main">
        {items}
      </div>
    )
  }

}


export default Header



