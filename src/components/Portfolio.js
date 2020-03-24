import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div class="row">
                <div class="side-content-sm"></div>
                <div class="main-content-lg">
                  <div class="content-body">
                    <div class="project-card">
                      <div class="project-image">
                        <img src="images/hackin.jpg" alt="HACK[IN]" height="300" width="310" />
                      </div>
                      <div class="project-content">
                        <h3>HACK[IN]</h3>
                        <p>An international level symposium event created on ReactJs for the UI and NodeJs as backend API calls. Players data was stored using MongoDB hosted with the help of aws servers. All commits were made on GitLab platform. I was part of the design and development team.</p>
                        {/* <p>I was part of the design and development team.</p> */}
                        {/* <a href="https://github.com/srnarayanaa/Movie-Database" target="_blank">View Source</a> */}
                      </div>
                    </div>

                    <div class="project-card">
                      <div class="project-image">
                        <img src="images/ransomware.png" alt="ransomware" height="300" width="310" />
                      </div>
                      <div class="project-content">
                        <h3>WannaFry</h3>
                        <p>WannaFry is a Ransomware developed in Python with an intention to understand the 2016 WannaCry Ransomware attack. This Ransomware encrypts the target machine entirely with a randomly created key, logged, until a simulated ransom is paid. This uses PyCrypto module to encrypt files.</p>
                        <a href="https://github.com/iimashfaaq/" target="_blank">View Source</a>
                      </div>
                    </div>
                      
                    <div class="project-card">
                      <div class="project-image">
                        <img src="images/chat.jpg" alt="piperchat" height="310" width="310" />
                      </div>
                      <div class="project-content">
                        <h3>PiperChat</h3>
                        <p>A python based group chat that implements a centralized  group chat system. The chat system, designed using the Tkinter package, allows chat between peers through a central host.</p>
                        <a href="https://github.com/iimashfaaq/PiperChat" target="_blank">View Source</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="side-content-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}