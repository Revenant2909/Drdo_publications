import { publicRequest, userRequest } from "../requestMethods";
import { addProductFailure, addProductStart, addProductSuccess, deleteProductFailure, deleteProductStart, deleteProductSuccess, getProductFailure, getProductStart, getProductSuccess, updateProductFailure, updateProductStart, updateProductSuccess } from "./productRedux";
import { getUsersFailure, getUsersStart, getUsersSuccess, loginFailure, loginStart, loginSuccess } from "./userRedux"
import {getOrderStart,getOrderSuccess,getOrderFailure,deleteOrderStart,deleteOrderSuccess,deleteOrderFailure} from "./orderRedux";

export const login = async (dispatch,user) =>{
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login",user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
        
    };
};

//GET ALL PRODUCTS

export const getProducts = async (dispatch) =>{
    dispatch(getProductStart());
    try {
        const res = await publicRequest.get("/books");
        dispatch(getProductSuccess(res.data));
        
    } catch (err) {
        dispatch(getProductFailure());
        
    };
};

//Delete
export const deleteProduct = async (id,dispatch) =>{
    dispatch(deleteProductStart());
    try {
        // const res = await userRequest.delete(`/products/${id}`);
        dispatch(deleteProductSuccess(id));
    } catch (err) {
        dispatch(deleteProductFailure());
        
    };
};

//Update

export const updateProduct = async (id,product, dispatch) =>{
    dispatch(updateProductStart());
    try {
        // const res = await userRequest.delete(`/products/${id}`);
        dispatch(updateProductSuccess({id:id,product:product}));
    } catch (err) {
        dispatch(updateProductFailure());
        
    };
};


//CREATE PRODUCT WORKING


export const addProduct = async ( product ,dispatch) =>{
    dispatch(addProductStart());
    try {
        const res = await publicRequest.post('/books/',product);
        dispatch(addProductSuccess(res.data));
    } catch (err) {
        dispatch(addProductFailure());
    };
};

//Get Users
export const getUsers = async (dispatch) =>{
    dispatch(getUsersStart());
    try {
        const res = await publicRequest.get("/users");
        dispatch(getUsersSuccess(res.data));
    } catch (err) {
        dispatch(getUsersFailure());
    };
};


//Delete User

export const deleteUser = async (dispatch) =>{
    dispatch(getUsersStart());
    try {
        const res = await publicRequest.delete("/users");
        dispatch(getUsersSuccess(res.data));
    } catch (err) {
        dispatch(getUsersFailure());
    };
};

//Get Orders
export const getOrders = async (dispatch) =>{
    dispatch(getOrderStart());
    try {
        const res = await publicRequest.get("/orders/");
        dispatch(getOrderSuccess(res.data));
    } catch (err) {
        dispatch(getOrderFailure());
    };
};

//Delete Order

export const deleteOrder = async (dispatch) =>{
    dispatch(deleteOrderStart());
    try {
        const res = await publicRequest.get("/orders");
        dispatch(deleteOrderSuccess(res.data));
    } catch (err) {
        dispatch(deleteOrderFailure());
    };
};





