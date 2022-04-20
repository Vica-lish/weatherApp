import { useDispatch, useSelector } from "react-redux";

import './forecast.css';
import './favoritesCard.css'
import '../../App.css'
import { favoritesAction } from '../../store/favorites';

const FavoritesCard = () => {

    const favorites = useSelector(state => state.favorites);
    const dispatch = useDispatch();

    const removeFavorite = (locatoin) => {
        dispatch(favoritesAction.remove(locatoin))
    }

    return (
        <div className='temps-container'>
            {favorites.map(favorite => {
                return (
                    <div className='temp-container__item'>
                        {favorite.location}<br />
                        {favorite.icon}<br />
                        {`${favorite.temperature.maximum}°C-${favorite.temperature.minimum}°C`}
                        <button className='btn button' onClick={() => removeFavorite(favorite.location)}>remove</button>
                    </div>
                )
            })}
        </div>
    )
}


export default FavoritesCard