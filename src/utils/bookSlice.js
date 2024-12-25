import { createSlice } from "@reduxjs/toolkit";
import booksData from "./BooksData";

let localBooks = JSON.parse(localStorage.getItem("7_5StateManagement261024"));

const bookSlice = createSlice({
    name: "book",
    initialState: {
        items: localBooks ? [...localBooks] : [...booksData]
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
            localStorage.setItem("7_5StateManagement261024", JSON.stringify(state.items));
        }
    }
})

export const { addItem } = bookSlice.actions;
export default bookSlice.reducer;