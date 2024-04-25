import { companyApi } from "../../mocks/company";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    companyData:{},
}


const slice = createSlice({
    name:"company",
    initialState,
    reducers:{
        addCompanyData(state,action){
            state.companyData=action.payload
        }
    }

});

export const {reducer} = slice

export const getCompanyData = (query,sort,page)=> async (dispatch) =>{
    try {
        const result = await companyApi.getCompanyData(query,sort,page);
        console.log(result)
        if(result){
            await dispatch(slice.actions.addCompanyData(result))
            return true
        }
        return false
    } catch (error) {
        return false
    }
}

export const getShopData = (id)=> async (dispatch) =>{
    try {
        const result = await companyApi.getShopData(id);
        console.log(result)
        if(result){
            await dispatch(slice.actions.addCompanyData(result))
            return true
        }
        return false
    } catch (error) {
        return false
    }
}

export default slice;
