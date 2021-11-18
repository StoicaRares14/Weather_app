import React from "react";

function CurrentDayCard() {
  return (
    <div className="container">
      <div className="card">
        <h2 className="location">Timisoara,Romania</h2>
        <div className="icon">
          <div className="circle">
            <img
              src="//cdn.weatherapi.com/weather/64x64/day/122.png"
              alt="Cloudy"
            />
          </div>
        </div>
        <h2 className="deg">20&deg;</h2>
        <div className="minMaxDeg">
          <span className="minDeg">Min: 10&deg;</span>
          <span className="maxDeg">Max: 30&deg;</span>
        </div>
        <h4 className="desc">Cloudy</h4>
      </div>
    </div>
  );
}

export default CurrentDayCard;
