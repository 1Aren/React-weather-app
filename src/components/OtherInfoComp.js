import React from 'react'
import temperatureIcon from '../img/temperatureIcon.png'
import windIcon from '../img/windIcon.png'
import humidityIcon from '../img/humidityIcon.png'

const OtherInfoComp = ({weather}) => {
  return (
    <div className='otherInfoBLock d-flex'>
      <div>
        <h5>
          <img src={temperatureIcon } alt="icon" style={{width: '20px'}} />
          <span style={{marginLeft: '5px'}}>Feels like: { Math.round(weather.main.feels_like)}°c</span>
        </h5>
        <h5>
          Max: { Math.round(weather.main.temp_max)}°c
        </h5>
        <h5>
          Min: { Math.round(weather.main.temp_min)}°c
        </h5>
      </div>
      <div style={{marginLeft: '30px'}}>
        <h5>
        <img src={windIcon} alt="icon" style={{width: '20px'}} />
         <span style={{marginLeft: '5px'}}>Wind speed: {weather.wind.speed}</span>
        </h5>
        <h5>
          <img src={humidityIcon} alt="icon" style={{width: '20px'}} />
          <span style={{marginLeft: '5px'}}>humidity: {weather.main.humidity} %</span>
        </h5>
      </div>
  </div>
  )
}

export default OtherInfoComp