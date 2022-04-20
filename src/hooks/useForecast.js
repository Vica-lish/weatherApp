import { useState } from "react";
import axios from 'axios';

import getCurrentDayForecast from '../helpers/getCurrentDayForecast';
import getUpcomingForecast from '../helpers/getUpcomingForecast';

const useForecast = () => {
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [forecast, setForecast] = useState(null);
    const CITYKET_URL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const FORECAST_URL = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/';


    const { REACT_APP_SECRET_KEY } = process.env

    const getCityKey = async location => {
        setForecast(null);
        setIsError(false)
        const options = {
            method: 'GET',
            url: `${CITYKET_URL}?apikey=${REACT_APP_SECRET_KEY}&q=${location}`,
        }

        const { data } = await axios.request(options)
        if (!data || data.length === 0) {
            setIsError('There is no such location');
            setIsLoading(false);
            return;
        }

        return data[0]
    }

    const getForecastData = async cityKey => {
        const { data } = await axios(`${FORECAST_URL}${cityKey}?metric=true&apikey=${REACT_APP_SECRET_KEY}`)
        if (!data || data.length === 0) {
            setIsError('something went wrong');
            setIsLoading(false);
            return;
        }

        return data;
    }

    const getherForecastData = (data, location) => {
        // send the data to helpers to create an easy object
        const currentDay = getCurrentDayForecast(data.DailyForecasts[0], location);
        const upcomingDays = getUpcomingForecast(data.DailyForecasts);

        setForecast({ currentDay, upcomingDays });
        setIsLoading(false);
    }

    const submitRequest = async location => {
        // reseve the data from the form file
        setIsLoading(true);
        setIsError(false);
        const data = await getCityKey(location);
        console.log(data);
        //  if no data or no key
        if (!data?.Key) return;
        const response = await getForecastData(data.Key);
        console.log(response);

        if (!response) return;

        getherForecastData(response, location);
    }
    // catch in main page
    return {
        isError,
        isLoading,
        forecast,
        submitRequest
    }
}

export default useForecast;