import { createStore } from 'redux';

import favoritesSlice from './favorites'

const store = createStore(favoritesSlice);

export default store;