import { ordersApi } from "../../mocks/orders";
import { createSlice } from "@reduxjs/toolkit";


// initial State 
const initialState = {
    orders:[],
    ordersPaginator:{}
}


// create a Slice
const slice = createSlice({
    name:"order",
    initialState,
    reducers:{
        createOrder(state,action){
            try{
                if(action.payload){
                    state.orders = [action.payload.data,...state.orders];
                  //   state.ordersPaginator = {...state.ordersPaginator,}  
                  }
            }catch(e){
                console.log(e);
            }
           
        },
    }
})

export const {reducer} = slice

export const createOrder=(data) => async(dispatch) => {

    try{
        const result = await ordersApi.createOrder(data)
        if(result){
            await dispatch(slice.actions.createOrder(result))
            return true
        }
    }catch(e){
        console.log(e);
    }
}