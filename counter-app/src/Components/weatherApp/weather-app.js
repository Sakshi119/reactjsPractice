import React,{useEffect, useState} from "react";
import "./weather-app.css";

const Weatherapp=()=>{
    const[city,setCity]=useState(null);
    const[search,setSearch]=useState("Mumbai");

    useEffect(() =>{
        const fetchApi = async()=>{
            const apiKey = "d1d13e413b64dcbfe7d28a6c169be924"; // Replace with your OpenWeatherMap API key
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apiKey}`;
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main); 
        }
        fetchApi();
    },[search])
    return(
        <div>
            <div className="box">
                <div className="input-data">
                    <input type="search" className="input-field" onChange={(e)=>{setSearch(e.target.value)}}/>
                </div>
            </div>

            {!city?(<p>No Data Found</p>):(
            <div className="info">
                <h1 className="location">{search}</h1>
                <h2 className="temp">{city.temp}</h2>
                <h3 className="tempmin_max">Min:  {city.temp_min}°Cel | Max: {city.temp_max}°Cel</h3>
            </div>
            )}
            
        </div>
    );
}
export default Weatherapp;