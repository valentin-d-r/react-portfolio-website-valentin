import React from "react";
import "./about.css";
import { GiBlackBook } from "react-icons/gi";
import { FaPlane } from "react-icons/fa";
import { AiOutlineFolder } from "react-icons/ai";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiBlackBook className="about__icon" />
              <h5>Studies</h5>
              <small>
                bac + 2 of Engineering School at CESI Engineering School
              </small>
            </article>

            <article className="about__card">
              <FaPlane className="about__icon" />
              <h5>Internships</h5>
              <small>2 Internships successfully completed</small>
            </article>

            <article className="about__card">
              <AiOutlineFolder className="about__icon" />
              <h5>Projects</h5>
              <small>Over 10 school Projects validated</small>
            </article>
          </div>

          <p>
            I am a French student in the 3rd year at CESI engineering school,
            this school allows me to work in projects, to develop my soft and
            hard skills, project management and teamwork
          </p>
        </div>
      </div>
    </section>
  );
};

export default about;
