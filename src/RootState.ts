import {combineReducers} from 'redux';
import bookListReducer from './screens/Dashboard/DashboardSlice';

const rootReducer = combineReducers({
  bookList: bookListReducer,
  // Add other reducers here
});

export type RootState = ReturnType<typeof rootReducer>;
