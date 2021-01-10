import React from 'react';
import styled from 'styled-components';

//components
import WeatherCard from './WeatherCard';

const CurrentWeather = ({weather}) => {
    return (
        <>
            {typeof weather.main != "undefined" ? (
                <WeatherContainer>
                        <WeatherCard size="big">
                            <span>Temperature</span>
                            {Math.round(weather.main.temp)}°C
                        </WeatherCard>

                        <WeatherCard size="big">
                            <span>Feels Like</span>
                            {Math.round(weather.main.feels_like)}°C
                        </WeatherCard>

                    <Weather>{weather.weather[0].main}</Weather>

                    <WeatherCard size="big">
                        <span>Min</span>
                        {weather.main.temp_min.toFixed(1)}°C
                    </WeatherCard>

                    <WeatherCard size="big">
                        <span>Max</span>
                        {weather.main.temp_max.toFixed(1)}°C
                    </WeatherCard>
                </WeatherContainer>
            ) : (
                ""
            )}
        </>
    )
};

const WeatherContainer = styled.div`
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Weather = styled.div`
    color: white;
    margin: auto;
    font-size: 50px;
    font-weight: 700;
    text-shadow: 3px 3px rgba(58, 53, 53, 0.73);
`;

export default CurrentWeather;
