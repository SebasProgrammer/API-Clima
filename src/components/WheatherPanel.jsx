import React, { useState } from "react";
import Form from "./Form";
import Card from './Card';

const WheatherPanel = () => {

    let urlWeather = "https://api.openweathermap.org/data/2.5/weather?appid=5c0d69d90584806324a6e7a75fe7c7b7&lang=es"
    let urlCity = "&q="

    let urlForecast = "https://api.openweathermap.org/data/2.5/weather?appid=5c0d69d90584806324a6e7a75fe7c7b7&lang=es"

    const [weather, setWheather] = useState([])
    const [forecast, setForecast] = useState([])
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)
    const [location, setLocation] = useState("")

    const getLocation = async(loc) => {
        setLoading(true)
        setLocation(loc)

        //wheather

        urlWeather += urlCity + loc

        await fetch(urlWeather).then((response) => {
            if (!response.ok) throw {response}
            return response.json()
        }).then((wheatherData) => {
            console.log(wheatherData)
            setWheather(wheatherData)
        }).catch(error => {
            console.log(error)
            setLoading(false)
            setShow(false)
        })

        //forecast

        urlForecast+= urlCity + loc
        
        await fetch(urlForecast).then((response) => {
            if (!response.ok) throw {response}
            return response.json()
        }).then((forecastData) => {
            console.log(forecastData)
            setForecast(forecastData)

            setLoading(false)
            setShow(true)

        }).catch(error => {
            console.log(error)
            setLoading(false)
            setShow(false)
        })


    }
    

    return (
        <React.Fragment>
            <Form newLocation = {getLocation}/>
            <Card
                showData = {show}
                loadingData = {loading}
                weather = {weather}
                forecast = {forecast}
            />

        </React.Fragment>
    );
};

export default WheatherPanel;