import { useState } from "react";
import CurrentDayCard from "./components/CurrentDayCard";
import WeekDayCard from "./components/WeekDayCard";
import { Grid } from "@mui/material";
import "./App.css";

function App() {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [status, setStatus] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
          console.log(lat);

          console.log(long);
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };

  return (
    <div>
      <Grid
        marginTop="0.5rem"
        alignItems="center"
        justifyContent="center"
        display="flex"
      >
        <CurrentDayCard></CurrentDayCard>
      </Grid>

      <Grid
        container
        marginTop="0.5rem"
        spacing={10}
        margin="auto"
        alignItems="center"
        justifyContent="center"
        display="flex"
      >
        {[0, 1, 2, 3, 4, 5, 6].map((forecastday) => (
          <WeekDayCard></WeekDayCard>
        ))}
      </Grid>
    </div>
  );
}

export default App;
