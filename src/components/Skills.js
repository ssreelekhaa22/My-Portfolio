import React, { Component } from "react";

export default class Skills extends Component {
  render() {
    return (
      <div id="skills" name="skills" className="skills">
        <div className="skillsBody">
          <div className=" titleWrapper">
            <p className="skillTitle">Skills</p>
            <p className="skillsdesc">
              I have a passion for learning and I am constantly expanding my
              skill set. I've had the opportunity to work with a variety of
              cutting-edge technologies, some of which include:
            </p>
          </div>
          <div className="skillswrapper">
            <div className="skillwrapper">
              <button className="skill">HTML</button>
            </div>
            <div className="skillwrapper">
              <button className="skill">CSS</button>
            </div>
            <div className="skillwrapper">
              <button className="skill">JAVASCRIPT</button>
            </div>
            <div className="skillwrapper">
              <button className="skill">REACTJS</button>
            </div>
            <div className="skillwrapper">
              <button className="skill">TYPESCRIPT</button>
            </div>
            <div className="skillwrapper">
              <button className="skill">Angular</button>
            </div>
            <div className="skillwrapper">
              <button className="skill">GITHUB</button>
            </div>
            <div className="skillwrapper">
              <button className="skill">PostgreSQL</button>
            </div>
            <div className="skillwrapper">
              <button className="skill">AWS Services</button>
            </div>
            <div className="skillwrapper">
              <button className="skill">JUNIT </button>
            </div>
            <div className="skillwrapper">
              <button className="skill">KARMA</button>
            </div>
            <div className="skillwrapper">
              <button className="skill">MYSQL</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
