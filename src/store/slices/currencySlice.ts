import { createSlice } from "@reduxjs/toolkit";

const currencySlice=createSlice({
    name:"currency",
    initialState:'INR',
    reducers:{
        //actiuons: logic of data changes
        //it recieves 2 args 
        // state: current data inside store related to currency
        //action: contains the data based on which action was initiated
        setCurrency: (state, action) => {
            //every action should the updated data
            //ecvery action has 2 types payload and type, all payload are optional they define which data to send
            return action.payload;
        },
    },

});

export const {setCurrency} = currencySlice.actions; //actions will be used by the components
export default currencySlice.reducer // this will be part of store setup