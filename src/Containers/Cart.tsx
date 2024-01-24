import React from "react";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import Product from "../components/Product";

function Cart() {
    const cartItems = useSelector((state: RootState) => state.cart)
    return (
        <div>
            {/* <pre>{JSON.stringify(cartItems)}</pre> */}
            <div className="row" >

                {
                    cartItems.map((item) =>
                        <Product
                            key={item.productId}
                            pdata={item}
                            btnClick={() => { }} />

                    )}
                {/* <Product pdata={plist} 
                    btnClick={(id) => console.log(id, ": add item")}/>  This when there is a single object to pass */}

                {/* <Product 
                    pdata={plist}
                    btnClick={(id) => console.log(id, ": add to cart and Navigate")} /> */}


            </div>
        </div>
    );
}
export default Cart;