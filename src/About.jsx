import React from "react";
import "./About.css";
import aboutImage from "./assets/edu.jpg";   

const About = () => {
  return (
    <section  id="about" className="about-hero">
      <div className="about-left">
        <h1>
          NIPUNA EDU <br />
          <span>CONSALTANTS</span>
        </h1>

        <p>
          It is a trusted education consultancy dedicated to guiding
          students toward the right academic and career opportunities.
          They provide expert support in admissions, career counselling,
          university selection, and end-to-end assistance for studying
          in India and abroad.
        </p>
        <button >Get Free Consultation</button>
      </div>

      <div className="about-right">
        <img src={aboutImage} alt="Student" />
      </div>
    </section>
  );
};

export default About;
