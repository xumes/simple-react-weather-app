import React from 'react';
import styled from 'styled-components';

//components
import ForecastCard from './ForecastCard';

const ForecastWeather = ( {forecast} ) => {
    return (
        <>
            {typeof forecast.list != "undefined" ? (
                <>
                <h2>Forecast for the next 4 days</h2>
                <ForecastContainer>
                    {forecast.list.map( (weather, key) => {
                        return (
                            <ForecastCard key={key}>
                                <div className="date">{weather.dt_txt.slice(0, 16)}</div>
                                <span>Temperature</span>
                                {weather.main.temp.toFixed(1)}°C

                                <span>Feels Like</span>
                                {weather.main.feels_like.toFixed(1)}°C

                                <span>Humidity</span>
                                {weather.main.humidity}°C

                                <span>Weather</span>
                                <div className="description">{weather.weather[0].description}</div>
                            </ForecastCard>
                        )
                    })
                }
                </ForecastContainer>
                </>
            ) : (
                ""
            )}
        </>
    )
};

const ForecastContainer = styled.div`
    min-height: 30vh;
    display: flex;
    flex-direction: row;
    overflow-y: scroll;
`;


export default ForecastWeather;
