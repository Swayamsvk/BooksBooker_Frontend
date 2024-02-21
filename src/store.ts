import {configureStore} from '@reduxjs/toolkit';
import bookListReducer from './screens/Dashboard/DashboardSlice';

export const store = configureStore({
  reducer: bookListReducer,
});
