import { useParams, useSearchParams } from "react-router-dom";
function ProductDetails(){
    const params: any = useParams(); //path params
    //query params ex
    const [queryParams, setQueryParams] = useSearchParams();
    return(
            <div>
                <h1>Product Details</h1>
                <h3>PID : {params.pid}</h3>
                <h4>Name: {queryParams.get("name")}</h4>
                <h4>Page:{queryParams.get("page")}</h4>
                <button onClick={()=> setQueryParams({page: "5"})}>Page 5</button>
            </div>
    );
}

export default ProductDetails;