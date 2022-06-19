import React from "react";
import "./language.css";
import { useState } from "react";

const Language = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <section id="language">
      <div className="language">
        <a
          href="#"
          onClick={() => setActiveNav("#fr") && window.location.reload(false)}
          className={activeNav === "#fr" ? "active" : ""}
        >
          FR
        </a>
        <a
          href="#"
          onClick={() => setActiveNav("#en") && window.location.reload(false)}
          className={activeNav === "#en" ? "active" : ""}
        >
          EN
        </a>
      </div>
    </section>
  );
};

export default Language;
