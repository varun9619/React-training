import { ProductType } from "../types";
import { getProducts } from "../services/ProductService";
import { useEffect, useState } from "react";



function useProductList(){
    const [plist, setPlist] = useState<ProductType[]>([]);
    useEffect(()=>{
        getProducts()
            .then((res)=>{
                console.log("response", res);
                setPlist(res.data);
            })
            .catch((e)=>{
                console.log("error", e);
            });
        }, []
    );
    return plist;
}
export default useProductList;