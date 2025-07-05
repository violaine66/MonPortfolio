import React, { Component } from "react";
import { Icon } from "@iconify/react";
import css3Icon from "@iconify/icons-logos/css-3";
import html5Icon from "@iconify/icons-logos/html-5";
import rubyIcon from "@iconify/icons-logos/ruby";
import railsIcon from "@iconify/icons-logos/rails";
import javascriptIcon from "@iconify/icons-logos/javascript";

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = process.env.PUBLIC_URL + "/images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="250px"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                  <Icon
                    icon={html5Icon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                   <Icon
                    icon={css3Icon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                   <Icon
                    icon={javascriptIcon}
                    style={{ fontSize: "300%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={rubyIcon}
                    style={{ fontSize: "300%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={railsIcon}
                    style={{ fontSize: "300%", margin: "9% 5% 0 5%" }}
                  />
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello} :) </span>
                    <br />
                    <br />
                    {about}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
