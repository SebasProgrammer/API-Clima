import React from 'react';
import Charge from './Charge';
import '../App.css'

const Card = ({loadingData, showData, weather, forecast}) => {

    let today = new Date()	
    let hora = ""
    let url = ""
    let iconUrl = ""
    let am_pm = "am"
    let hours = ""
    let minutes = ""

    if (loadingData){
        return <Charge />
    }

    if (showData){
        if (today.getHours() > 11){
            am_pm = "pm"
        }
        url = "https://openweathermap.org/img/w/"
        iconUrl = url + weather.weather[0].icon + ".png"
        hours = today.getHours() % 12
        hours = hours ? hours: '0'
        minutes = today.getMinutes()
        minutes = minutes < 10 ? '0' + minutes: minutes
        hora = hours + ':' + minutes + " "
    }

    return (
        <div className="mt-5"> 
            {
                showData === true && (
                    <div className='cardContainer'>
                        
                        <div className='left'>
                            <div>
                                <span className='hora'>{hora}</span>
                                <span className='ampm' >{am_pm}</span>
                            </div>
                            <p className='city'>{weather.name}</p>
                            <p className='date'>{today.toDateString()} </p>
                        </div>

                        <div className='right'>
                            <div>
                                <img className='weatherImg' src={iconUrl} alt="weather icon" />
                            </div>
                            <p className='centigrados'><strong>{(weather.main.temp - 273.15).toFixed()}°C</strong> </p>
                            <p className='description'>
                                {weather.weather[0].description}
                            </p>
                        </div>

                        <div className='cityContainer'>
                            <h2 className='card-title'>{weather.name}</h2>
                            <img className='imageCity' src="cityPhoto.png" alt="" />

                        </div>

                    </div>

                )
            }
        </div>
    );
}

export default Card;