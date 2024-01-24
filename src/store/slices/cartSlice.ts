import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../types";

const cartSlice = createSlice({
    name:"cart",
    initialState: [] as ProductType[],
    reducers:{
        addItem: (state, action)=> {
            //data we return to store should be immutable
            //immutability is managed internally by using immer in Redux took kit (RTK)
            state.push(action.payload);
            return state;
        },
        removeItem: (state, action)=>{
            return state.filter((item) => item.productId !== action.payload);
        },
    },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
