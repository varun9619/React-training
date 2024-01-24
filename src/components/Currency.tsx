import React from "react";
import { setCurrency } from "../store/slices/currencySlice";
import { useDispatch } from "react-redux"

function Currency() {
    const codes = ['INR', 'USD', 'EUR', 'GBP'];
    const dispatch = useDispatch();
    return (
        <select 
        onChange={(e)=>dispatch(setCurrency(e.target.value))}  //this is how we dispatch
        className="form-control-sm">
            {
                codes.map((c) => <option key={c}>{c}</option>)
            }
        </select>
    )
}

export default Currency