import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub, BsSpotify } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/valentin-dremaux-2859b6203/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/valentin-d-r" target="_blank">
        <BsGithub />
      </a>
      <a href="https://discordapp.com/users/260139190975463424/" target="_blank">
        <FaDiscord />
      </a>
    </div>
  );
};

export default HeaderSocials;
