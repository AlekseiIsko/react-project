import React from "react";
import wetFloor from "../../img/wetfloor.svg";

const Main = () => {
  return (
    <div className="main-content">
      <div>
        <h1 className="c-yellow">always clean</h1>
        <h1 className="c-blue">HOME & OFFICE</h1>
        <p>
          It’s hard to find someone who enjoys cleaning. It takes a lot of
          energy, time, and you always have to do it when there are so many
          other things to do around you. <br />
          <br /> Is it possible to make it so that your surroundings are clean,
          but not to create a constant torture of cleaning? Of course it is!
        </p>
        <button type="button" className="btn books">
          Book now
        </button>
      </div>
      <div>
        <img src={wetFloor} alt="wetfloor" />
      </div>
    </div>
  );
};

export default Main;
