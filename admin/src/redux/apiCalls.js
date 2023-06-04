import { publicRequest, userRequest } from "../requestMethods";
import { addProductFailure, addProductStart, addProductSuccess, deleteProductFailure, deleteProductStart, deleteProductSuccess, getProductFailure, getProductStart, getProductSuccess, updateProductFailure, updateProductStart, updateProductSuccess } from "./productRedux";
import { getUsersFailure, getUsersStart, getUsersSuccess, loginFailure, loginStart, loginSuccess } from "./userRedux"


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
        const res = await publicRequest.get("/users");
        dispatch(getUsersSuccess(res.data));
    } catch (err) {
        dispatch(getUsersFailure());
    };
};