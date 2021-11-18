import React from "react";
import { Grid } from "@mui/material";

function WeekDayCard() {
  return (
    <Grid item>
      <div className="container-w">
        <div className="card-w">
          <h2 className="location-w">Monday</h2>
          <div className="icon-w">
            <div className="circle-w">
              <img
                src="//cdn.weatherapi.com/weather/64x64/day/122.png"
                alt="Cloudy"
              />
            </div>
          </div>
          <h2 className="deg-w">20&deg;</h2>
          <div className="minMaxDeg-w">
            <span className="minDeg-w">Min: 10&deg;</span>
            <span className="maxDeg-w">Max: 20&deg;</span>
          </div>
          <h4 className="desc-w">Cloudy</h4>
        </div>
      </div>
    </Grid>
  );
}

export default WeekDayCard;
