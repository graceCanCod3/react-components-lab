function WeatherForcast (props) {

    return (
    <div className="weather">
        <h2>{props.Weather.day}</h2>
        <img src={props.Weather.img} alt={props.Weather.imgAlt} />
        <p><span>conditions: </span>{props.Weather.conditions}</p>
        <p><span>time: </span>{props.Weather.time}</p>
    </div>

    )
}

export default WeatherForcast