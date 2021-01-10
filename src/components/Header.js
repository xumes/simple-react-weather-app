import React from 'react';

const Header = ( { weather } ) => {
    const dateBuild = (d) => {
        let date = String(new window.Date());
        date = date.slice(3, 15);
        return date;
    };

    return (
        <div>
            {typeof weather.main != "undefined" ? (
                <div className="location-container">
                    <div className="location">
                        {weather.name}, {weather.sys.country}
                    </div>
                    <div className="date"> {dateBuild(new Date())}</div>
                </div>
            ) : (
                <h1>Weather app</h1>
            )}
        </div>
    )
};

export default Header;
