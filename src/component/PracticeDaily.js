import React from "react";
import Fade from "react-reveal/Fade";

export const PracticeDaily = () => {
  return (
    <div className="practcontainer">
      <div>
        <Fade left>
          <h1>Practice Daily</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br /> sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
            <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco
            <br /> laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </Fade>
      </div>

      <div>
        <Fade right>
          <img
            src="/images/practiceimg.svg"
            alt="webdeveloper"
            width="500px"
            height="500px"
          />
        </Fade>
      </div>
    </div>
  );
};
