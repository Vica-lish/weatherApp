import moment from 'moment';

const getTheTime = (data) => {
    const hours = new Date().getHours()
    const isDayTime = hours > 6 && hours < 20
    return isDayTime
}

const getTemperature = (data) => {
    const time = getTheTime(data)
    if (time) return Math.round(data.Temperature.Maximum.Value)
    else return Math.round(data.Temperature.Minimum.Value)
}

const getCurrentDayForecast = (data, title) => (
    {
        id: performance.now().toString(36) + Math.random().toString(36).replace(/\./g, ""),
        weekday: moment(data.Date).format('dddd'),
        location: title,
        temperature: getTemperature(data),
        fullTemperature: {
            maximum: Math.round(data.Temperature.Maximum.Value),
            minimum: Math.round(data.Temperature.Minimum.Value)
        },
        weatherIcon: 'someIcon'
    });

//

export default getCurrentDayForecast
