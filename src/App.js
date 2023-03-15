import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import clearIcon from "./img/clearIcon.png";
import cloudsIcon from "./img/cloudsIcon.png";
import OtherInfoComp from "./components/OtherInfoComp";
import MainInfo from "./components/MainInfo";
import firstBackgroundImage from "./img/background.jpg";
import secondBackgroundImage from "./img/SecondBackground.jpg";
import thirdBackgroundImage from "./img/thirdBackground.jpg";
import firstNightBg from "./img/nightBg1.jpg";
import secondNightBg from "./img/nightBg2.jpg";
import thirdNightBg from "./img/nightBg3.jpg";
const api = {
  key: "c7616da4b68205c2f3ae73df2c31d177",
  base: "http://api.openweathermap.org/data/2.5/",
};

const App = () => {
  const [backgrounImages, setBackgrounImages] = useState([
    firstBackgroundImage,
    secondBackgroundImage,
    thirdBackgroundImage,
    firstBackgroundImage,
    secondBackgroundImage,
    thirdBackgroundImage,
  ]);
  const [weatherIcon, setweatherIcon] = useState(clearIcon);
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [value, setValue] = useState(0);
  const date = new Date();
  const [mode, setMode] = useState("day");
  let hours = date.getHours();

  useEffect(() => {
    if (hours > 19) {
      setMode("night");
      setBackgrounImages([
        firstNightBg,
        secondNightBg,
        thirdNightBg,
        firstNightBg,
        secondNightBg,
        thirdNightBg,
      ]);
    }
    const interval = setInterval(() => {
      setValue((v) => {
        return v === 4 ? 0 : v + 1;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [hours]);

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${city}&units=metric&appid=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setCity("");
          console.log(result);
          if (result.weather[0].main === "Clear") {
            setweatherIcon(clearIcon);
          } else if (result.weather[0].main === "Clouds") {
            setweatherIcon(cloudsIcon);
          }
        });
    }
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center mainBlock"
      style={{
        backgroundImage: `url(${backgrounImages[value]})`,
        height: "100vh",
      }}>
      <main style={{ width: "80%", marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setCity(e.target.value)}
          value={city}
          onKeyPress={search}
          className={"form-control " + (mode === "day" ? "day" : "nightMode")}
        />
        {typeof weather.main != "undefined" ? (
          <div
            className={
              "WeatherBlock d-flex align-items-center justify-content-around rounded " +
              (mode === "day" ? "day" : "nightMode")
            }>
            <MainInfo weather={weather} weatherIcon={weatherIcon} />
            <OtherInfoComp weather={weather} />
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
};

export default App;
