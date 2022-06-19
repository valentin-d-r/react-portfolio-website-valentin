import React from "react";
import { BiCheck } from "react-icons/bi";
import "./services.css";
const services = () => {
  return (
    <section id="services">
      <h5>My Important Projects</h5>
      <h2>Missions</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Optimix Internship</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Created and fixed JS/XML scripts for web scraping</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Created scripts SQL for daily report</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Find and give solution to optimize scripts and the web scraping</p>
            </li>
          </ul>
        </article>
        {/* END OF Optimix */}
        <article className="service">
          <div className="service__head">
            <h3>Smart Building Energies Internship</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Development using syncFusion and C#</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Initiation to SCRUM method</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Being in charge of website functionalities durability and updates</p>
            </li>
          </ul>
        </article>
        {/* END OF SBE */}
      </div>
    </section>
  );
};

export default services;
