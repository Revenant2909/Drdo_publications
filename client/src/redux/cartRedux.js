import { createSlice } from "@reduxjs/toolkit";



const cartRedux = createSlice({
    name: "cart",
    initialState: {
        books : [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addBook: (state, action) => {
            state.quantity += 1;
            state.books.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
    }
});




export const { addProduct } = cartRedux.actions;
export default cartRedux.reducer;