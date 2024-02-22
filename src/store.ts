import {combineReducers, configureStore} from '@reduxjs/toolkit';
import bookListReducer from './screens/Dashboard/DashboardSlice';
import reviewsReducer from './screens/BookDetails/BookDetailsSlice';

const rootReducer = combineReducers({
  bookListReducer,
  reviewsReducer,
  // Add other reducers here
});
export const store = configureStore({
  reducer: rootReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
