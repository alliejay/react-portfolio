import React, { Component } from 'react'
import IconBriefcase from 'icons/briefcase'
import IconCode from 'icons/code'
import IconDownload from 'icons/download'
import IconGraduationCap from 'icons/graduationCap'
import IconPalette from 'icons/palette'

import './styles.scss'

class Resume extends Component {
  constructor(props)  {
    super(props)
  }

  render () {
    return (
      <div>
        <div className="row">

          <div className="col-md-8">

            {/*WORK HISTORY*/}
            <div className="first-column">
                <IconBriefcase iconTitle="briefcase" alt="briefcase icon" />
                <div className="title work-school-title upper">Work History</div>
            </div>

            {/*<!--CTI TOWERS-->*/}
            <div className="row" id="cti">
              <section className="col-md-4 resume-year">
                2017
              </section>

              <section className="col-md-8 resume-item">
                <span className="work-title">Front End Developer</span>
                <p className="company">Ceterus</p>

                <p>I currently work for <a href="https://www.ceterus.com" target="_blank">Ceterus</a> empowering small business entrepreneurs through automated bookkeeping solutions. I am part of a small team responsible for the development of our client facing application using React & Redux. I also contribute to the development of our API & our internal software (PHP).</p>
              </section>
            </div>

            {/*<!--TECHSOFT-->*/}
            <div className="row" id="techsoft">
              <section className="col-md-4 resume-year">
                2016
              </section>

              <section className="col-md-8 resume-item">
                <span className="work-title">Front End Developer</span>
                <p className="company">Technical Software Services, Inc.</p>

                <p>I was hired by "TechSoft," a Department of Defense contractor, immediately after my graduation from <a href="https://www.theironyard.com" target="_blank">The Iron Yard</a>.  I supported my team as both the UI/UX Designer & as a Front End Developer. I worked for TechSoft for just over one year before moving over to Ceterus.</p>
              </section>
            </div>
            {/*<!--SCHOOLING-->*/}
            <div className="first-column school">
              <IconGraduationCap iconTitle="graduation-cap" alt="graduation cap icon" />
                <div className="title work-school-title upper">Education</div>
            </div>

            {/*<!--IRON YARD-->*/}
            <div className="row" id="iron-yard">
              <section className="col-md-4 resume-year">
                2015
              </section>

              <section className="col-md-8 resume-item">
                <span className="work-title">Front End Engineering Course</span>
                <p className="company">The Iron Yard</p>

                <p>I attended the Iron Yard's Fall of 2015 cohort. This course is a 50+ hour a week commitment which most importantly taught me <i>how</i> to learn.  I began working at TechSoft immediately following my graduation from TIY.</p>
              </section>
            </div>

            {/*<!--UMASS AMHERST-->*/}
            <div className="row" id="umass">
              <section className="col-md-4 resume-year">
                2009
              </section>

              <section className="col-md-8 resume-item">
                <span className="work-title">B.A. in Journalism</span>
                <p className="company">University of Massachusetts, Amherst</p>

                <p>I attended UMASS Amherst from 2009 - 2012 and earned a B.A. in Journalism.  While I no longer want to pursue Journalism, my major taught me valuable communication skills and instilled in me a passion for reading & keeping up with current events.</p>
              </section>
            </div>

          </div>


          <div className="col-md-4">
            {/*<!--DEV SKILLS-->*/}
            <div className="second-column">
              <IconCode iconTitle="code" alt="code icon" />
                <span className="title upper">Development Skills</span>
            </div>

            <section className="skills">
              <p>JAVASCRIPT (ES6 & earlier)</p>
              <p>REACT JS</p>
              <p>REDUX</p>
              <p>HTML5</p>
              <p>CSS3 / SASS / SCSS</p>
              <p>API INTEGRATION</p>
              <p>TYPESCRIPT</p>
              <p>ANGULAR 1 & 2</p>
              <p>IONIC FRAMEWORK</p>
              <p>JQUERY, UNDERSCORE, MOMENT JS, etc.</p>
            </section>

            {/*<!--DESIGN SKILLS-->*/}
            <div className="second-column design">
              <IconPalette iconTitle="palette" alt="palette icon" />
                <span className="title upper">Design Skills</span>
            </div>

            <section className="skills">
              <p>UI/UX DESIGN</p>
              <p>WIREFRAMING</p>
              <p>ADOBE XD, SKETCH, GIMP, BALSAMIQ</p>
              <p>RESPONSIVE WEB DESIGN</p>
            </section>

            {/*<!--DESIGN SKILLS-->*/}
            <div className="second-column resume">
              <IconDownload iconTitle="download" alt="download icon" />
            <span className="title upper">
                <a href="src/components/resume/resume.pdf" download="./resume.pdf">Download Resume</a>
            </span>

            </div>
          </div>
        </div>
       </div>
    )
  }
}

export default Resume