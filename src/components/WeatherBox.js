import React from "react"
import Card from 'react-bootstrap/Card'

function temps(kelvin){
    const celsius = (kelvin - 273.15).toFixed(1);
    const fahrenheit = (( kelvin * 1.8 ) - 459.67).toFixed(1);
    return {C: celsius, F:fahrenheit}
}

function WeatherBox(props){
    return (
    <Card style={{ width: '12rem' }} className="text-center">
        <Card.Header>{props.data.name}</Card.Header>
        <Card.Img variant="bottom" src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} />
        <Card.Body>
        <Card.Text>
            Temperature: {temps(props.data.main.temp).C}°C, {temps(props.data.main.temp).F}°F 
        </Card.Text>
        <Card.Text>
        Humidity: {props.data.main.humidity}% 
        </Card.Text>
        <Card.Text>
        Weather: {props.data.weather[0].description}
        </Card.Text>
        </Card.Body>
    </Card>);   
}

export default WeatherBox