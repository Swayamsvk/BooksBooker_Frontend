import {createSlice} from '@reduxjs/toolkit';
import {BookListArray, BookListType} from './DashboardModel';

const initialState: BookListArray = {
  bookList: [
    {id: 1, name: 'Science', description: "It's a book of love"},
    {id: 2, name: 'Maths', description: "It's a book of love"},
    {id: 3, name: 'Science', description: "It's a book of love"},
    {id: 4, name: 'Maths', description: "It's a book of love"},
    {id: 5, name: 'Science', description: "It's a book of love"},
    {id: 6, name: 'Maths', description: "It's a book of love"},
    {id: 7, name: 'Science', description: "It's a book of love"},
    {id: 8, name: 'Maths', description: "It's a book of love"},
    {id: 9, name: 'Science', description: "It's a book of love"},
    {id: 10, name: 'Maths', description: "It's a book of love"},
    {id: 11, name: 'Science', description: "It's a book of love"},
    {id: 12, name: 'Maths', description: "It's a book of love"},
    {id: 13, name: 'Science', description: "It's a book of love"},
    {id: 14, name: 'Maths', description: "It's a book of love"},
    {id: 15, name: 'Science', description: "It's a book of love"},
    {id: 16, name: 'Maths', description: "It's a book of love"},
    {id: 17, name: 'Science', description: "It's a book of love"},
    {id: 18, name: 'Maths', description: "It's a book of love"},
    {id: 19, name: 'Science', description: "It's a book of love"},
    {id: 20, name: 'Maths', description: "It's a book of love"},
    {id: 21, name: 'Science', description: "It's a book of love"},
    {id: 22, name: 'Maths', description: "It's a book of love"},
    {id: 23, name: 'Science', description: "It's a book of love"},
  ],
};

export const bookListSlice = createSlice({
  name: 'book-list',
  initialState,
  reducers: {},
});
export const {} = bookListSlice.actions;
export default bookListSlice.reducer;
