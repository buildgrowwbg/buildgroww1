
import { createSlice } from "@reduxjs/toolkit";
import { locationApi } from "../../mocks/location";
const initialState = {
    location:{city:"Madhubani"},
    currentLocation:null
}


const slice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        getLocation(state,action){
            state.location=action.payload;
        },
        getCurrentLocation(state,action){
            state.currentLocation = action.payload;
        },

    }

});

export const {reducer} = slice

export const getLocation = (lat,lon) => async (dispatch) =>{
    const result = await locationApi.getLocation(lat,lon);
    console.log(result);
    if(result){
        await dispatch(slice.actions.getLocation(result && result.data))
        localStorage.setItem("location",JSON.stringify(result.data))
        return true
    }
    return false
}
export const getCurrentLocation = (data) => async (dispatch) =>{
    if(data){
        await dispatch(slice.actions.getCurrentLocation(data))
        return true
    }
    return false
}



export default slice;
