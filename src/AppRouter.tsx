import { Route, Routes } from "react-router-dom";
import Checkout from "./Containers/Checkout";
import ProductList from "./Containers/ProductList";
import Demo from "./Demo";
import ErrorPage from "./Containers/ErrorPage";

function AppRouter(){
    return(
        <Routes>
            <Route path="/" element={<Demo></Demo>}></Route>
            <Route path="/products" element={<ProductList />}></Route>
            <Route path="/checkout" element={<Checkout/>}></Route>
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}

export default AppRouter
