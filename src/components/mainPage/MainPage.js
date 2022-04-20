import { MdFavoriteBorder } from "react-icons/md";
import { Rolling } from "react-loading-io";
import { useDispatch, useSelector } from "react-redux";

import Form from '../form/Form';
import ForecastCard from '../cards/ForecastCard';
import Error from "../error/Error";
import useForecast from '../../hooks/useForecast';
import './mainPage.css';
import '../../App.css'
import { favoritesAction } from '../../store/favorites'

const MainPage = () => {

    let iconHartStyle = { color: '#ff1b68', fontSize: '1.5rem' };
    const dispatch = useDispatch();
    //favBtn is boolian to change the text of the button
    const favBtn = useSelector(state => state.addOrRemove)
    //data coming from hooks folder
    const { isError, isLoading, forecast, submitRequest } = useForecast();

    const removeFavorite = () => {
        dispatch(favoritesAction.remove(forecast.currentDay.location))
        addOrRemoveBtn()
    }

    const addFavorite = () => {
        dispatch(favoritesAction.add(forecast.currentDay))
        addOrRemoveBtn()
    };

    const addOrRemoveBtn = () => {
        dispatch(favoritesAction.favBtn(forecast.currentDay.location))
    }

    const btn =
        favBtn ? <button onClick={removeFavorite} className='btn button'>
            Remove from Favorites
        </button>
            : <button onClick={addFavorite} className='btn button'>
                Add to Favorites
            </button>

    const mainForecast = forecast ? <div className='main-temp-container'>
        <div className='temp-icon'>Icon</div>
        <div className='city'>
            {forecast.currentDay.location} {forecast.currentDay.temperature} °C
        </div>
    </div> : <div className='main-temp-container'>
        <div className='temp-icon'>Icon</div>
        <div className='city'>City and Temp</div>
    </div>
    // send the location from form component to useForcast state
    const onSubmit = value => {
        submitRequest(value);
    }

    return (
        <div className='main-page'>
            {/* submit data send to hooks file */}
            <Form submitSearch={onSubmit} />
            <div className='container'>
                <div className='header-container'>
                    {mainForecast}
                    <div className='hart-btn-container'>
                        <MdFavoriteBorder style={iconHartStyle} />
                        {btn}
                    </div>
                </div>
                <h3 className='current-temp-condition'>Weekly Forecast</h3>
                {isLoading && <Rolling size={64} color='#ff1b68' />}
                {isError && <Error message={isError} />}
                {forecast && <ForecastCard forecast={forecast.upcomingDays} />}
            </div>
        </div>
    )
}

export default MainPage
