import React from "react";
import { Grid } from "@mui/material";

function WeekDayCard(props) {
  return (
    <Grid item>
      <div className="container-w">
        <div className="card-w">
          <h2 className="location-w">{props.day}</h2>
          <div className="icon-w">
            <div className="circle-w">
              <img src={props.icon} alt={props.desc} />
            </div>
          </div>
          <h2 className="deg-w">{props.celsius}&deg;</h2>
          <div className="minMaxDeg-w">
            <span className="minDeg-w">Min: {props.tempMax}&deg;</span>
            <span className="maxDeg-w">Max: {props.tempMax}&deg;</span>
          </div>
          <h4 className="desc-w">{props.desc}</h4>
        </div>
      </div>
    </Grid>
  );
}

export default WeekDayCard;
