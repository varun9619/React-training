import { Route, Routes } from "react-router-dom";
import Checkout from "./Containers/Checkout";
//import ProductList from "./Containers/ProductList"; //commented this for lazy loading
import Demo from "./Demo";
import ErrorPage from "./Containers/ErrorPage";
import PrivateRoute from "./components/PrivateRoute";
import ProductDetails from "./Containers/ProductDetails";
import React from "react";
import Cart from "./Containers/Cart";

const LazyProductList = React.lazy(()=>import("./Containers/ProductList"));
function AppRouter(){
    return(
        <React.Suspense fallback={<div>Loading ...</div>}>
        <Routes>
            <Route path="/" element={<Demo></Demo>}></Route>
            <Route path="/products" element={<LazyProductList />}></Route>
            <Route path="/details/:pid" element={<ProductDetails/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route
                path="/checkout" 
                element={
                    <PrivateRoute>
                        <Checkout/>
                    </PrivateRoute>
                }></Route>
            <Route path="*" element={<ErrorPage />} />
        </Routes>
        </React.Suspense>
    )
}

export default AppRouter
