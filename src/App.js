import React, { useState } from "react";
import Weather from "./pages/Weather";

const App = () => {
  return (
    <Weather />
  )
}
// import axios from 'axios';
// import key from './key';

// const api = {
//   key: key.OPENWEATHER_API_KEY,
//   base: key.OPENWEATHER_BASE_URL,
// };

// function App() {
//   const dateBuild = (d) => {
//     let date = String(new window.Date());
//     date = date.slice(3, 15);
//     return date;
//   };

//   const [query, setQuery] = useState("");
//   const [weather, setWeather] = useState({});
//   const search = (e) => {
//     if (e.key === "Enter") {
//       const url = `${api.base}weather?q=${query}&units=metric&APPID=${api.key}`
//       console.log(url)
//       axios
//         .get(url)
//         .then(({data}) => {
//           console.log("this is the result", data);
//           setQuery("");
//           setWeather(data);
//         })
//         .catch(e => console.log("err", e))
//     }
//   };

//   return (
//     <div
//       className={
//         typeof weather.main != "undefined"
//           ? weather.main.temp > 18
//             ? "App hot"
//             : "App cold"
//           : "App"
//       }
//     >
//       <main>
//         <div className="search-container">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="search-bar"
//             onChange={(e) => setQuery(e.target.value)}
//             value={query}
//             onKeyPress={search}
//           />
//         </div>
//         {typeof weather.main != "undefined" ? (
//           <div>
//             <div className="location-container">
//               <div className="location">
//                 {weather.name}, {weather.sys.country}
//               </div>
//               <div className="date"> {dateBuild(new Date())}</div>
//             </div>
//             <div className="weather-container">
//               <div className="temperature">
//                 <span>Temperature</span>
//                 {Math.round(weather.main.temp)}°C
//               </div>
//               <div className="temperature">
//               <span>Feels Like</span>
//                 {Math.round(weather.main.feels_like)}°C
//               </div>
//               <div className="weather">{weather.weather[0].main}</div>
//             </div>
//           </div>
//         ) : (
//           ""
//         )}
//       </main>
//     </div>
//   );
// }

export default App;
