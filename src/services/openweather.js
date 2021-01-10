import axios from 'axios';
import key from '../key';

const api = {
    key: key.OPENWEATHER_API_KEY,
    base: key.OPENWEATHER_BASE_URL,
};


export const getWeather = ( city ) => {
    const url = `${api.base}weather?q=${city}&units=metric&APPID=${api.key}`;
    console.log(url);
    return axios
        .get(url)
        .then(({data}) => {
            console.log("this is the result", data);
            return data;
            })
        .catch(e => {
            console.log("err", e)
            return e
        })
};

export const getForecast = ( city ) => {
    const url = `${api.base}forecast?q=${city}&units=metric&APPID=${api.key}`;
    console.log(url);
    return axios
        .get(url)
        .then(({data}) => {
            console.log("this is the result", data);
            return data;
            })
        .catch(e => {
            console.log("err", e)
            return e
        })
};
