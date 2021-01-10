import React from 'react';
//service
import { getWeather, getForecast } from '../services/openweather'

const SearchBar = ({ city, setCity, setWeather, setForecast }) => {
    const handleSearch = async (e) => {
        console.log(e.target.value)
        if (e.key === "Enter") {
            getWeather( city )
                .then(weather => {
                    console.log("This is the result of current weather", weather);
                    setWeather(weather);
                });

            getForecast( city )
                .then(weather => {
                    console.log("This is the result of forecast", weather);
                    setForecast(weather);
                });
        }
    };

    return(
        <div className="search-container">
            <input
                type="text"
                placeholder="Search..."
                className="search-bar"
                onChange={(e) => setCity(e.target.value)}
                value={city}
                onKeyPress={handleSearch}
            />
        </div>
    )
};

export default SearchBar;
