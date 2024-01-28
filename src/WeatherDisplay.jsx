import React from "react";

const WeatherDisplay = () => {
    return(
        <div className="weather-display">
            <h2> Mars Weather </h2>
            <div className="weather-info">
        <div className="temperature">Temperature: --°C</div>
        <div className="other-info">Other weather info: --</div>
        {/* Add placeholders for other weather information */}
      </div>
        </div>
    );
};

export default WeatherDisplay;