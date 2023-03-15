import React from 'react'
const MainInfo = ({weather, weatherIcon}) => {
    const format_date = (d) => {
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        return `${day} ${date} ${month} ${year}`
      }
  return (
    <>
    <div style={{float: 'left'}}>
        <img src={weatherIcon} alt="icon" style={{width: '100px'}} />
    </div>
    <div className='d-flex flex-column align-items-center'>
              <div>
                <h3>
                  {weather.name}, {weather.sys.country}
                </h3>
              </div>
              <div>{format_date(new Date())}</div>
              <div className='weather-box'>
                <div className='temp'>
                  <h1 className='m-50' style={{fontSize: '70px'}}>
                  { Math.round(weather.main.temp)}°c
                  </h1>
                </div>
                <div>
                  <h3>
                    {weather.weather[0].main}
                  </h3>
                </div>
              </div>
      </div>
    </>
  )
}

export default MainInfo