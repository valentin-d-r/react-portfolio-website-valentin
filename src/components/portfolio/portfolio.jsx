import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/wildfibers_feverbattle.png";
import IMG2 from "../../assets/WIP.jpg";
import IMG3 from "../../assets/four_dungeons.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Crop Saver",
    github: "https://github.com/Wild-Box-Studio/Wild-Fibers",
    demo: "https://gabriel-jouet.itch.io/wffb",
  },
  {
    id: 2,
    image: IMG2,
    title: "Crops Saver",
    github: "https://github.com/valentin-d-r/Crops-saver",
    demo: "https://sydiko.itch.io",
  },
  {
    id: 3,
    image: IMG3,
    title: "Four Dungeons",
    github: "https://github.com/Wild-Box-Studio/GameJamRogueLite",
    demo: "https://sydiko.itch.io/four-dungeons",
  },
];

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Itch.io
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default portfolio;
