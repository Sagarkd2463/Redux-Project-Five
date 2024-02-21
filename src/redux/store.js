import { configureStore } from '@reduxjs/toolkit';
import userReducer from './actions';
import themeReducer from './themeAction';

const store = configureStore({
    reducer: {
        user: userReducer,
        theme: themeReducer,
    },
});

export default store;