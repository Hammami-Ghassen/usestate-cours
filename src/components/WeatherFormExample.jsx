import React, { useState } from "react";
import  styles from "../styles/WeatherFormExample.module.css";

function WeatherFormExample() {
    const [weather,setWeather]=useState(
        {
            city : "Tunis",
            temperature: 25,
            condition: "☀️Ensoleiee"
        }
    );
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setWeather((prevWeather)=>({
            ...prevWeather,
            [name]:value
        }));
    }
    const resetWeather=(e)=>{
        e.preventDefault();
        setWeather({
            city : "",
            temperature: "",
            condition: ""
        });
    }
    
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Modifier Meteo</h2>

            <form className={styles.form} >
                <input
                    type="text"
                    name="city"
                    placeholder="Nom de la vie"
                    className={styles.input}
                    value={weather.city}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="temperature"
                    placeholder="Temp"
                    className={styles.input}
                    value={weather.temperature}
                    onChange={handleChange}
                />
                <select name="condition"
                    value={weather.condition}
                    onChange={handleChange}
                    className={styles.select} >

                    <option value="☀️Ensoleiee">☀️Ensoleiee</option>
                    <option value="🌧️Pluvieuse">🌧️Pluvieuse</option>
                    <option value="⛅nuageux">⛅Partiellement nuageux</option>
                    <option value="🌩️orageux">🌩️Orageux</option>

                </select>
                <button type="submit" className={styles.resetBtn} onClick={resetWeather}>Reset</button>

                <div className={styles.card}>
                    <h3>ville : {weather.city ||"_"}</h3>
                    <p> temperature :{weather.temperature ||"_"}</p>
                    <p> condition :{weather.condition ||"_"}</p>
                </div>

            </form>

        </div>
    );
}

export default WeatherFormExample;
