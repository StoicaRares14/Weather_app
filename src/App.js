import { useState } from "react";
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

  return <div className="App"></div>;
}

export default App;
