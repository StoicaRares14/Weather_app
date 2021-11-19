import { useEffect, useState } from "react";
import "./App.css";
import { Grid } from "@mui/material";
import CurrentDayCard from "./components/CurrentDayCard";
import WeekDayCard from "./components/WeekDayCard";
import { getWeekDay } from "./components/ComputeDay";
import Geolocation from "./components/Geolocation";

function App() {
  const location = Geolocation();

  const API_KEY = "ef895abe75a642c0adc64102211711";

  //initial state pt props ca sa nu folosesc redux
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [currentDay, setCurrentDay] = useState({
    condition: { icon: "", text: "" },
    temp_c: "",
  });
  const [forecast, setForecast] = useState([
    {
      day: {
        maxtemp_c: "",
        mintemp_c: "",
        condition: { icon: "", text: "" },
        avgtemp_c: "",
      },
      date: "",
      date_epoch: "",
    },
  ]);

  const getForecast = async () => {
    try {
      const api_call = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location.coordinates.lat},${location.coordinates.lng}&days=7&aqi=no&alerts=no`
      );

      const res = await api_call.json();

      setForecast(res.forecast.forecastday);
      setCurrentDay(res.current);
      setCountry(res.location.country);
      setCity(res.location.name);
    } catch (error) {
      console.log(console.error());
    }
  };

  //mai dau odata request ca sa am cooronatele bune pentru ca initial latitudinea si longitudinea le-am pus 0
  useEffect(() => {
    getForecast();
  }, [location.loaded]);

  return (
    <div>
      {location.loaded ? (
        <div>
          <Grid
            marginTop="0.5rem"
            alignItems="center"
            justifyContent="center"
            display="flex"
          >
            <CurrentDayCard
              city={city}
              country={country}
              icon={currentDay.condition.icon}
              celsius={currentDay.temp_c}
              tempMax={forecast[0].day.maxtemp_c}
              tempMin={forecast[0].day.mintemp_c}
              desc={currentDay.condition.text}
            ></CurrentDayCard>
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
            {forecast.map((forecastday) => (
              <WeekDayCard
                key={forecastday.date_epoch}
                day={getWeekDay(forecastday.date)}
                icon={forecastday.day.condition.icon}
                celsius={forecastday.day.avgtemp_c}
                tempMax={forecastday.day.maxtemp_c}
                tempMin={forecastday.day.mintemp_c}
                desc={forecastday.day.condition.text}
              ></WeekDayCard>
            ))}
          </Grid>
        </div>
      ) : (
        "Location data not available yet"
      )}
    </div>
  );
}

export default App;
