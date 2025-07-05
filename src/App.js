import React, { Component } from "react";
import $ from "jquery";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

class App extends Component {
  basePath = process.env.PUBLIC_URL || "";

  constructor(props) {
    super();
    this.state = {
      foo: "bar",
      resumeData: {},
      sharedData: {},
    };
  }

  // Tu peux supprimer cette méthode si tu ne changes plus la langue
  // applyPickedLanguage(pickedLanguage, oppositeLangIconId) {
  //   this.swapCurrentlyActiveLanguage(oppositeLangIconId);
  //   document.documentElement.lang = pickedLanguage;
  //   var resumePath =
  //     document.documentElement.lang === window.$primaryLanguage
  //       ? `res_primaryLanguage.json`
  //       : `res_secondaryLanguage.json`;
  //   this.loadResumeFromPath(resumePath);
  // }

  // Pareil, à supprimer si tu ne changes plus la langue
  // swapCurrentlyActiveLanguage(oppositeLangIconId) {
  //   var pickedLangIconId =
  //     oppositeLangIconId === window.$primaryLanguageIconId
  //       ? window.$secondaryLanguageIconId
  //       : window.$primaryLanguageIconId;
  //   document
  //     .getElementById(oppositeLangIconId)
  //     .removeAttribute("filter", "brightness(40%)");
  //   document
  //     .getElementById(pickedLangIconId)
  //     .setAttribute("filter", "brightness(40%)");
  // }

  componentDidMount() {
    this.loadSharedData();
    // Plus besoin d’appeler applyPickedLanguage puisque la sélection est supprimée
    // this.applyPickedLanguage(
    //   window.$primaryLanguage,
    //   window.$secondaryLanguageIconId
    // );
  }

  loadResumeFromPath(path) {
    $.ajax({
      url: `${this.basePath}/${path}`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  loadSharedData() {
    $.ajax({
      url: `${this.basePath}/portfolio_shared_data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ sharedData: data });
        document.title = `${data.basic_info.name}`;
        // Charge ici la première version du CV (par exemple en français)
        this.loadResumeFromPath("res_primaryLanguage.json");
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  render() {
    const { sharedData, resumeData } = this.state;

    return (
      <div>
        {sharedData.basic_info && <Header sharedData={sharedData.basic_info} />}

        {resumeData.basic_info && sharedData.basic_info && (
          <About
            resumeBasicInfo={resumeData.basic_info}
            sharedBasicInfo={sharedData.basic_info}
          />
        )}

        {resumeData.projects && resumeData.basic_info && (
          <Projects
            resumeProjects={resumeData.projects}
            resumeBasicInfo={resumeData.basic_info}
          />
        )}

        {sharedData.skills && resumeData.basic_info && (
          <Skills
            sharedSkills={sharedData.skills}
            resumeBasicInfo={resumeData.basic_info}
          />
        )}

        {resumeData.experience && resumeData.basic_info && (
          <Experience
            resumeExperience={resumeData.experience}
            resumeBasicInfo={resumeData.basic_info}
          />
        )}

        {sharedData.basic_info && <Footer sharedBasicInfo={sharedData.basic_info} />}
      </div>
    );
  }
}

export default App;
