import { Link, useNavigate } from "react-router-dom";

function Menu(){
    const navigate = useNavigate();
    return(
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/products">Products</Link>
            </li>
            <li>
                <Link to="/checkout">Checkout</Link>
            </li>
            <button onClick={()=> navigate("/cart")}>Cart</button>
        </ul>
    );        
}

export default Menu