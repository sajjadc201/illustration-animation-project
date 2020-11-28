import React from "react";
import Fade from "react-reveal/Fade";

export const Home = () => {
  return (
    <div className="homecontainer">
      <div>
        <Fade left>
          <h1>Welcome to my page</h1>
          <h2>BootCamp 2020 Project</h2>
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
            src="/images/webdeveloper.svg"
            alt="webdeveloper"
            width="500px"
            height="500px"
          />
        </Fade>
      </div>
    </div>
  );
};
