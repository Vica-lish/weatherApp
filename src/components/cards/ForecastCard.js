import './forecast.css';

const Forecast = ({ forecast }) => {
    return (
        <div className='temps-container'>
            {forecast.map(day => {
                return (
                    <div className='temp-container__item'>
                        {day.weekday}<br />
                        {day.temperature} <br />
                        {day.weatherIcon}
                    </div>
                )
            })}
        </div>
    )
}


export default Forecast