import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        favorites: [],
        addOrRemove: false
    },
    reducers: {
        add(state, action) {
            const newFavorite = action.payload;
            const existingFavorit = state.favorites.find(
                favorite => favorite.location.toUpperCase() === newFavorite.location.toUpperCase());
            if (!existingFavorit) {
                state.favorites.push({
                    id: newFavorite.id,
                    location: newFavorite.location,
                    icon: newFavorite.weatherIcon,
                    temperature: newFavorite.fullTemperature
                });
            } else {
                console.log('The city in favorites');
            }
        },
        remove(state, action) {
            const location = action.payload;
            const existingFavorit = state.favorites.find(favorite => favorite.location === location);
            if (existingFavorit) {
                state.favorites = state.favorites.filter(favorite => favorite.location !== location);
            } else {
                console.log(`You didn't save that city`);
            }
        },
        favBtn(state, action) {
            const newFavorite = action.payload;
            const existingFavorit = state.favorites.find(
                favorite => favorite.location.toUpperCase() === newFavorite.toUpperCase())
            if (existingFavorit) state.addOrRemove = true;
            else state.addOrRemove = false;
        }
    }
});

export const favoritesAction = favoritesSlice.actions;
export default favoritesSlice.reducer;