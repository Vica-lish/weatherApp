import moment from 'moment';

const getTemperature = (temp) => {
    let maximum = Math.round(temp.Maximum.Value)
    let minimum = Math.round(temp.Minimum.Value)
    return (`${maximum}°C - ${minimum}°C`)
}
const getUpcomingForecast = data => {
    return (data.map(day => ({
        weekday: moment(day.Date).format('dddd'),
        temperature: getTemperature(day.Temperature),
        weatherIcon: 'someIcon'
    })))
}

export default getUpcomingForecast;