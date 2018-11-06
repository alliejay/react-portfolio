import React, { Component } from 'react'
import IconMail from 'icons/mail'
import IconEmail from 'icons/email'
import IconGithub from 'icons/github'
import IconLinkedIn from 'icons/linkedin'
import IconTwitter from 'icons/twitter'
import './styles.scss'

class Contact extends Component {
  constructor(props)  {
    super(props)
  }

  render () {
    return (
      <div className="contact-wrapper">

        <div className="col col-8">
          <div className="first-column contact-description">
            <IconMail iconTitle="mail" alt="mail icon" />
            <div className="title upper contact-title">Contact Information</div>
            <p>If you have any questions about my work experience or if you just want to connect, my contact details are listed here. The best way to get in touch with me is via <a href="https://www.linkedin.com/in/alliejarsenault/" target="_blank">Linked In</a>, but I check my other accounts on a regular basis as well.</p>
          </div>
        </div>

        <div className="col col-4">
          <ul className="contact-list">
            <li>
              <IconEmail />
              <a href="mailto:alliejarsenault@gmail.com">alliejarsenault@gmail.com </a>
            </li>
            <li>
              <IconLinkedIn />
              <a href="https://www.linkedin.com/in/alliejarsenault/" target="_blank">alliejarsenault</a>
            </li>
            <li>
              <IconGithub />
              <a href="https://github.com/alliejay" target="_blank">alliejay</a>
            </li>
            <li>
              <IconTwitter />
              <a href="https://twitter.com/allieJarsenault" target="_blank">alliejarsenault</a>
            </li>
          </ul>
        </div>

      </div>
    )
  }
}

export default Contact