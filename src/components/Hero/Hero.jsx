import React from "react";
import "./Hero.css";

function Hero({ onStart }) {
  const background =
    "https://uploads.onecompiler.io/43ycg6qsx/1782046920530/blob-scene-haikei.svg";

  return (
    <div className="mainPage" style={{ backgroundImage: `url(${background})` }}>
      <h1>Todo</h1>
      <p>Organize your tasks, boost your productivity.</p>

      <button onClick={onStart}>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}

export default Hero;
