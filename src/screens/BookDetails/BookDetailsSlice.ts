import {createSlice} from '@reduxjs/toolkit';
import {BookListArray} from './BookDetailsModel';

const initialState: BookListArray = {
  reviews: [
    {id: 1, name: 'swayam', description: 'book was awesome'},
    {id: 2, name: 'samyak', description: 'book was awesome'},
    {id: 3, name: 'samyak', description: 'book was awesome'},
  ],
};

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
});

export const {} = reviewsSlice.actions;
export default reviewsSlice.reducer;
