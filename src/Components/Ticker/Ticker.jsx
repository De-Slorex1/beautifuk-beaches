import React, { useEffect, useState } from 'react';
import '../Ticker/Ticker.css'

function Ticker() {
  const [dateTime, setDateTime] = useState(new Date().toLocaleString());
  const [location, setLocation] = useState('Fetching location...');

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Get user location
  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const res = await fetch(
              `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=fdb271c8ea3a2831a10f636074c604d5`
            );

            const data = await res.json();
            if (data.length > 0) {
              setLocation(data[0].name || 'Unknown Location');
            } else {
              setLocation('Location not found');
            }
          } catch (error) {
            setLocation('Unable to retrieve location');
          }
        },
        () => setLocation('Location access denied')
      );
    } else {
      setLocation('Geolocation not supported');
    }
  }, []);

  return (
    <div className='ticker_container'>
      <div className='ticker_content'>
        📅 {dateTime} | 📍 {location}
      </div>
    </div>
  );
}

export default Ticker;
