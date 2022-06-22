import React from "react";
import CVi from "../../assets/Valentin_Dremaux_Resume.pdf";
import CVfr from "../../assets/Valentin_Dremaux_CV.pdf";
import PFI from "../../assets/PFI.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CVi} className='btn'>
        Download CV (International)
      </a>
      <a href={CVfr} className='btn'>
        Download CV (France)
      </a>
      <a href={PFI} className='btn'>
        Download PFI
      </a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  );
};

export default CTA;
