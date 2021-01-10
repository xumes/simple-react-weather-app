import React from 'react';
import styled from 'styled-components';

const ForecastCard = ( props ) => {
    return (
        <Temperature >
            {props.children}
        </Temperature>
    )
}

const Temperature = styled.div`
    color: white;
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 5px 5px;
    padding: 15px 25px;
    font-size: 30px;
    font-weight: 700;
    background-color: rgb(255, 255, 255, 0.1);
    border-radius: 16px;
    box-shadow: 3px 3px rgba(58, 53, 53, 0.73);
    text-shadow: 3px 3px rgba(58, 53, 53, 0.73);
    .date {
        font-size: 15px;
    }
    span {
        font-size: 10px;
    }
    .description {
        font-size: 20px;
    }
`;

export default ForecastCard;
