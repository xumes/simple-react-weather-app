import React from 'react';
import styled from 'styled-components';

const WeatherCard = ( props ) => {
    const fontSize = (props.size === 'big') ? '100px' : '20px';
    const spanFontSize = (props.size === 'big') ? '30px' : '15px';
    return (
        <Temperature size={fontSize} span={spanFontSize}>
            {props.children}
        </Temperature>
    )
}

const Temperature = styled.div`
    color: white;
    position: relative;
    display: grid;
    margin: 30px auto;
    padding: 15px 25px;
    font-size: ${props => props.size};
    font-weight: 700;
    background-color: rgb(255, 255, 255, 0.1);
    border-radius: 16px;
    box-shadow: 3px 3px rgba(58, 53, 53, 0.73);
    text-shadow: 3px 3px rgba(58, 53, 53, 0.73);
    span {
        font-size: ${props => props.span};
    }
`;

export default WeatherCard;
