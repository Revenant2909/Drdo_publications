import {createSlice} from "@reduxjs/toolkit";



const orderRedux = createSlice({
    name:"orders",
    initialState:{
        orders : [],
        isFetching: false,
        error: false,
    },
    reducers:{
        //Get All
       getOrderStart:(state)=>{
        state.isFetching=true;
        state.error = false;
       },
       getOrderSuccess:(state,action)=>{
        state.isFetching=false;
        state.orders=action.payload; 
       },
       getOrderFailure:(state)=>{
        state.isFetching=false;
        state.error = true;
       },


       //Delete Product
       deleteOrderStart:(state)=>{
        state.isFetching=true;
        state.error = false;
       },
       deleteOrderSuccess:(state,action)=>{
        state.isFetching=false;
        state.orders.splice( 
            state.orders.findIndex((item)=>item._id === action.payload.id),
            1
        ); 
       },
       deleteOrderFailure:(state)=>{
        state.isFetching=false;
        state.error = true;
       },



    },
});

export const {getOrderFailure,getOrderStart,getOrderSuccess,deleteOrderStart,deleteOrderSuccess,deleteOrderFailure} = orderRedux.actions;
export default orderRedux.reducer;