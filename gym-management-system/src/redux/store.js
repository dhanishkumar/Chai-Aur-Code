import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import classReducer from './classSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    classes: classReducer,
  },
});