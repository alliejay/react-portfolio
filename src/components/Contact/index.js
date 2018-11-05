import React, { Component } from 'react'
import IconEmail from 'icons/email'
import IconGithub from 'icons/github'
import IconLinkedIn from 'icons/linkedin'
import IconTwitter from 'icons/twitter'

class Contact extends Component {
  constructor(props)  {
    super(props)
  }

  render () {
    return (
      <div>

        <div className="col col-8">
          <h4>Contact Information</h4>
          <p>If you have any questions about my work experience or if you just want to connect, check out the listings to your right. The best way to contact me is via email, but I check my other social media accounts on a regular basis as well.</p>
        </div>

        <div className="col col-4">
          <ul>
            <li>
              <a href="mailto:alliejarsenault@gmail.com">
                <IconEmail /> alliejarsenault@gmail.com
              </a>
            </li>
            <li>
              <IconLinkedIn /> Linked In
            </li>
            <li>
              <IconGithub />  Github
            </li>
            <li>
              <IconTwitter /> alliejay
            </li>
          </ul>
        </div>

      </div>
    )
  }
}

export default Contact