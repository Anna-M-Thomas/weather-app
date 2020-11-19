import React from "react"
import Card from 'react-bootstrap/Card'

function WeatherBox(props){
    return (
    <Card style={{ width: '18rem' }} className="text-center">
        <Card.Img variant="top" src="https://www.noaa.gov/sites/default/files/styles/crop_394x394/public/thumbnails/image/FocusArea__Weather-02.jpg" />
        <Card.Body>
    <Card.Title>{props.data.name}</Card.Title>
        <Card.Text>
            Temperature: {props.data.main.temp}
            Wind: {props.data.wind.speed}
            Weather: {props.data.weather.description}
        </Card.Text>
        </Card.Body>
    </Card>);   
}

export default WeatherBox