import { Route, Routes } from "react-router-dom";
import Checkout from "./Containers/Checkout";
import ProductList from "./Containers/ProductList";
import Demo from "./Demo";
import ErrorPage from "./Containers/ErrorPage";
import PrivateRoute from "./components/PrivateRoute";

function AppRouter(){
    return(
        <Routes>
            <Route path="/" element={<Demo></Demo>}></Route>
            <Route path="/products" element={<ProductList />}></Route>
            <Route
                path="/checkout" 
                element={
                    <PrivateRoute>
                        <Checkout/>
                    </PrivateRoute>
                }></Route>
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}

export default AppRouter
