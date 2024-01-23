import React from "react";
import { ProductType } from "../types";
import Column from "./Column";

type ProductProps = {

    pdata: ProductType;
    btnClick: (id:number) => void;
}

class Product extends React.Component<ProductProps>{
    state = {
        quantity:1,
    };
    
    renderStock(stock: number, id:number){
        if (stock>0){
            return <button onClick={() => this.props.btnClick(id)}>Add to cart</button>
        }
        return <p>out of stock</p>
    }

    handleDecrease = () => {
        const { quantity } = this.state;
        if (quantity > 1) {
          this.setState({ quantity: quantity - 1 });
        }
      };
    
      handleIncrease = () => {
        const { quantity } = this.state;
        // Assuming productStock is the available stock
        if (quantity < this.props.pdata.productStock) {
          this.setState({ quantity: quantity + 1 });
        }
      };

    render (){
        const data= this.props.pdata;
        const { quantity } = this.state;
        
        return(
            <Column size={3}>
                {/* <h1>Component</h1>
                <p> some more content</p>
                <p>Hello from <h2>{name.toUpperCase()}</h2></p> */}
                <img src = {data.productImage} style={{maxWidth:"300px"}}/>
                <h4>{data.productName}</h4>
                <h5>{data.productPrice} RS</h5>
                {this.renderStock(data.productStock, data.productId)}
                <button type="button" onClick={()=>this.handleDecrease()}>
                    -
                </button>
                <p>{quantity}</p>
                <button type="button" onClick={()=>this.handleIncrease()}>
                    +
                </button>
            </Column>
            
        )
    }
}

export default Product;