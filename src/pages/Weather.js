import React, {useState} from 'react';
import styled from 'styled-components';
//components
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CurrentWeather from '../components/CurrentWeather';
import ForecastWeather from '../components/ForecastWeather';

const Weather = () => {
    const [ city, setCity ] = useState("");
    const [ weather, setWeather ] = useState( { } );
    const [ forecast, setForecast ] = useState( { } )

    return (
        <div
            className={
                typeof weather.main != "undefined"
                ? weather.main.temp > 18
                    ? "App hot"
                    : "App cold"
                : "App"
            }>
            <Header weather={ weather }/>
            <SearchBar city={ city } setCity={ setCity } setForecast= { setForecast } setWeather={ setWeather }/>
            <Main>
                <CurrentWeather weather={weather}/>
                <ForecastWeather forecast={forecast}/>
            </Main>

            <p>This is the city: {city}</p>
        </div>
    )
};

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    vertical-align: top;
    min-height: 85vh;
    padding: 25px;
`;

export default Weather;
