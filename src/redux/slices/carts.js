import {cartsApi} from "../../mocks/carts"
import {createSlice} from "@reduxjs/toolkit"

// initial State
const initialState = {
    carts : [],
}

// create a slice
const slice = createSlice({
    name:"carts",
    initialState,
    reducers:{
        // create Cart Reducer
        createCart(state,action){
            if(action.payload.data){
                state.carts = [action.payload.data,...state.carts]
                console.log(state.carts);
                // state.cartsPaginator = {...state.cartsPaginator,itemCount:state.cartsPaginator.itemCount+1};
            }
            console.log(action.payload);
        },
        // cart's List Reducers
        cartsList(state,action){
            if(action.payload.data){
                state.carts = [...action.payload.data];
            }else{
                state.carts = [];
            }
        },

        // Delete cart item Reducer
        deleteCart(state,action){
            if(action.payload){
                let id = action.payload;
                state.carts = state.carts.filter((item) => item.id !== id) 
            }
        }
    }
});

export const {reducer} = slice

// Delete the cart item slice function
export const deleteCart = (id) => async(dispatch) => {
    try{    
        const result = await cartsApi.deleteCart(id);

        if(result){
            await dispatch(slice.actions.deleteCart(id))
            return true
        }

    }catch(error){
        console.log(error)
    }
}
// get the carts List
export const cartsList = () => async (dispatch) => {

    try{
        const result = await cartsApi.cartsList();
        console.log("Slice result",result)
        if(result){
            await dispatch(slice.actions.cartsList(result.data));
            return true
        }else{
            return false;
        }

    }catch(error){
        console.log(error)
    }
} 

// Create Cart Slice Function
export const createCart =(data) => async (dispatch) => {
    try{
        const result = await cartsApi.createCart(data);
        if(result){
            console.log(result);
            await dispatch(slice.actions.createCart(result))
        }else{
            return false
        }
    }catch(error){
        console.log(error)
    }
}