import React, { Component } from 'react'
import Link from 'react-router/Link'
import ProfileImg from 'cartoon-dev-allie.png'
import 'styles.scss'

class Header extends Component {

  constructor(props) {
    super(props)
  }

  navItems = () => {
    return [
      {
        text: "about",
        route: "/about"
      },
      {
        text: "resume",
        route: "/resume"
      },
      {
        text: "portfolio",
        route: "/portfolio"
      },
      {
        text: "contact",
        route: "/contact"
      }
    ].filter((i) => i.text !== "none")
  }

  renderNav = (navItems) => {
    return navItems.map((i, index) => {
      return (
        <Link className="nav-item" key={index} to={i.route}>
          <span className="pointer">{i.text}</span>
        </Link>
      )
    })
  }

  render () {
    const items = this.renderNav(this.navItems())

    return (
      <div className="header-main">
        <div className="header-img">
            <img src={ProfileImg} className="profile-pic" />
        </div>
        <div className="name-title">
          <Link to="/">
            <h1>Allie J Arsenault</h1>
            <h2>Web Development & Design</h2>
          </Link>
        </div>
        <div className="nav-items">
          {items}
        </div>
      </div>
    )
  }

}


export default Header



