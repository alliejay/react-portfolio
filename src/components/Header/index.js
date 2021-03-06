import React, { Component } from 'react'
import Link from 'react-router/Link'
import ProfileImg from 'cartoon-dev-allie.png'
import './styles.scss'

// sticky nav
window.addEventListener('scroll', () => {
  const navClasses = document.querySelector("#sticky").classList
  if(window.scrollY >= 349) {
    navClasses.remove("nav-items")
    navClasses.add("scrolled-nav")
  } else if (window.scrollY <= 348) {
    navClasses.add("nav-items")
    navClasses.remove("scrolled-nav")
  }
})

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
          <span className="pointer cl-effect-5">
            <a>{i.text}</a>
          </span>
        </Link>
      )
    })
  }

  render () {
    const items = this.renderNav(this.navItems())

    return (
      <div className="header-main">
        <div className="sticky-header">
          <div className="header-img">
              <img src={ProfileImg} className="profile-pic" />
          </div>
          <div className="name-title">
            <Link to="/">
              <h1>Allie J Arsenault</h1>
              <h2>Web Development</h2>
            </Link>
          </div>
        </div>

        <div id="sticky" className="nav-items">
          {items}
        </div>
      </div>
    )
  }

}


export default Header



