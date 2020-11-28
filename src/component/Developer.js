import React from "react";
import Fade from "react-reveal/Fade";

export const Developer = () => {
  return (
    <div className="devcontainer">
      <div>
        <Fade left>
          <img
            src="/images/developerimg.svg"
            alt="webdeveloper"
            width="500px"
            height="500px"
          />
        </Fade>
      </div>
      <div>
        <Fade right>
          <h1>Full Stack Developer</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br /> sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
            <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco
            <br /> laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </Fade>
      </div>
    </div>
  );
};
