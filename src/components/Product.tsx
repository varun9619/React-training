import React from "react";
import { ProductType } from "../types";

type ProductProps = {

    pdata: ProductType;
    btnClick: (id:number) => void;
}

class Product extends React.Component<ProductProps>{

    
    renderStock(stock: number, id:number){
        if (stock>0){
            return <button onClick={() => this.props.btnClick(id)}>Add to cart</button>
        }
        return <p>out of stock</p>
    }
    render (){
        const data= this.props.pdata;
        
        return(
            <div>
                {/* <h1>Component</h1>
                <p> some more content</p>
                <p>Hello from <h2>{name.toUpperCase()}</h2></p> */}
                <img src = {data.productImage} style={{maxWidth:"250px"}}/>
                <h4>{data.productName}</h4>
                <h5>{data.productPrice} RS</h5>
                {this.renderStock(data.productStock, data.productId)}
                {/* {data.productStock >0 ? (
                    <button onClick={()=>this.props.btnClick(data.productId)}>Add to Cart</button>
                ): <p>out of stock</p>} 
                This is terinary method of conditional rendering */}
                {/* <button type="button" onClick={() => ()}>
                    -
                </button>
                <p> HERE MY QUANTITY </p>
                <button type="button" onClick={() => ()}>
                    +
                </button> */}
                <button>
                    -
                </button>
                
                <button>
                    +
                </button>
            </div>
            
        )
    }
}

export default Product;