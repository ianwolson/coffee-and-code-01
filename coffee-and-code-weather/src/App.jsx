import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_KEY = "863bd21930e9fcdc36c89f7045d39693";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (latitude, longitude) => {
    const API_BASE_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

    try {
      const response = await axios.get(API_BASE_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching weather:', error);
      throw error;
    }
  };

  useEffect(() => {
    // Fetch weather data based on the user's location
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather(latitude, longitude)
            .then((data) => setWeatherData(data))
            .catch((error) => console.error('Error fetching weather:', error));
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    }
  }, []);

  return (
    <div>
      <h1>Weather App</h1>
      {weatherData && (
        <div>
          <h2>Weather Information</h2>
          <pre>{JSON.stringify(weatherData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
