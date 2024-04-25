import {reducer as authReducer} from "../slices/auth";
import {reducer as ordersReducer} from "../slices/orders"
import {reducer as cartsReducer} from "../slices/carts";import {reducer as productReducer} from "../slices/products"
import {reducer as companyReducer} from "../slices/company";
import {reducer as locationReducer} from "../slices/location"
import {combineReducers} from "@reduxjs/toolkit";



export const rootReducer = combineReducers({
   auth:authReducer, 
   carts:cartsReducer,
   orders:ordersReducer,product:productReducer,
   company:companyReducer ,
   location:locationReducer
});
