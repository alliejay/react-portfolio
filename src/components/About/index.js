import React, { Component } from 'react'
import { Link } from 'react-router'
import AboutPic from 'about-pic.png'
import './styles.scss'

class About extends Component {
  constructor(props)  {
    super(props)
  }

  render () {
    return (
      <div>
        <section className="quote clearfix col col-12">
          <span>"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful."</span>
              <br />
            <p>Albert Schweitzer</p>
          </section>

        <div className="sub-content">
          <p className="about-pic-section">
            <img src={AboutPic} className="about-pic" width="23%" />

            <section className="about-section">
              <h2>ABOUT ALLIE</h2>
              <p>Albert Schweitzer's quote regarding success and happiness embodies the ideals which I believe whole-heartedly, and which have changed my life for the better in recent years.</p>

              <p>I graduated from the University of Massachusetts, Amherst in 2012 and shortly thereafter started a career in the Cell Tower Industry. While I enjoyed my role as a Lease Analyst, and I had the utmost respect for my managers & co-workers, I (like most) am not overwhelmingly interested in steel structures. I found myself envying those who went to work every day truly loving what they did.</p>

              <p>I moved from Boston, MA (where I had lived my entire life) to Charleston, SC in March of 2015 and shortly after stopped working at the cell tower company. It was the perfect time to change career paths and choose a field that I have an organic interest in. It quickly became apparent that web development & design brings out a side of me I hadn't seen in years. I got excited to go to school every day and learn more about the amazing things I would become capable of as a front end engineer.</p>

              <p>I was enrolled at The Iron Yard for their Fall 2015 Cohort in Front End Development, and graduated on January 8th. I was offered a job immediately following Graduation/Demo Day as a Front End Engineer for a Department of Defense contractor beginning in February 2016. One year later, in March of 2017 I accepted a position as Front End Engineer at <strong><Link to="https://ceterus.com/" target="_blank" style={{color: '#334455'}}>Ceterus</Link></strong> where I am still enployed today. If you wish to contact me for freelance inquiries or just to chat, please visit the contact page.</p>
          </section>
        </p>
        </div>
    </div>

    )
  }
}

export default About