
import axios from "axios";
import { ProductType } from "../types";

export const getProducts=() =>{
    const url='https://raw.githubusercontent.com/mdmoin7/Random-Products-Json-Generator/master/products.json'
    return axios.get<ProductType[]>(url);
};