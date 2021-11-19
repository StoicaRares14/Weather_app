import React, { useState } from "react";

function CurrentDayCard(props) {
  const [xAxis, setXAxis] = useState(0);
  const [yAxis, setYAxis] = useState(0);
  const [trans, setTrans] = useState("all 0.5s ease");
  const [depthLocation, setDepthLocation] = useState(0);
  const [depthIcon, setDepthIcon] = useState(0);
  const [depthDeg, setDepthDeg] = useState(0);
  const [depthDesc, setDepthDesc] = useState(0);
  const [depthMinMaxDeg, setDepthMinMaxDeg] = useState(0);

  const handleMouseMove = (e) => {
    setXAxis((window.innerWidth / 2 - e.pageX) / 25);
    setYAxis((window.innerHeight / 2 - e.pageY) / 25);
  };

  const handleMouseLeave = (e) => {
    setXAxis(0);
    setYAxis(0);
    setTrans("all 0.5s ease");
    setDepthLocation(0);
    setDepthMinMaxDeg(0);
    setDepthDeg(0);
    setDepthIcon(0);
    setDepthDesc(0);
  };

  const handleMouseEnter = () => {
    setTrans("none");
    setDepthLocation(150);
    setDepthMinMaxDeg(75);
    setDepthDeg(100);
    setDepthIcon(200);
    setDepthDesc(125);
  };

  return (
    <div
      className="container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <div
        className="card"
        style={{
          transform: `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`,
          transition: `${trans}`,
        }}
      >
        <h2
          className="location"
          style={{
            transform: `translateZ(${depthLocation}px)`,
          }}
        >
          {props.city},{props.country}
        </h2>
        <div
          className="icon"
          style={{
            transform: `translateZ(${depthIcon}px)`,
          }}
        >
          <div className="circle">
            <img src={props.icon} alt={props.desc} />
          </div>
        </div>
        <h2
          className="deg"
          style={{
            transform: `translateZ(${depthDeg}px)`,
          }}
        >
          {props.celsius}&deg;
        </h2>
        <div
          className="minMaxDeg"
          style={{
            transform: `translateZ(${depthMinMaxDeg}px)`,
          }}
        >
          <span className="minDeg">Min: {props.tempMin}&deg;</span>
          <span className="maxDeg">Max: {props.tempMax}&deg;</span>
        </div>
        <h4
          className="desc"
          style={{
            transform: `translateZ(${depthDesc}px)`,
          }}
        >
          {props.desc}
        </h4>
      </div>
    </div>
  );
}

export default CurrentDayCard;
