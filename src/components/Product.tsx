import React from "react";
import { ProductType } from "../types";
import Column from "./Column";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { RootState } from "../store/store";

type ProductProps = {

    pdata: ProductType;
    btnClick: (id:number) => void;
    code:string;
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
            <div className="card">
            
                {/* <h1>Component</h1>
                <p> some more content</p>
                <p>Hello from <h2>{name.toUpperCase()}</h2></p> */}
                <Link to={`/details/${data.productId}?name=${data.productName}&&page=100`}>
                <img src = {data.productImage} style={{maxWidth:"300px"}}/>
                </Link>
                <h4 className="name">{data.productName}</h4>
                <h5 className="price">{this.props.code} {data.productPrice}</h5>
                {this.renderStock(data.productStock, data.productId)}
                <button type="button" onClick={()=>this.handleDecrease()}>
                    -
                </button>
                <p>{quantity}</p>
                <button type="button" onClick={()=>this.handleIncrease()}>
                    +
                </button>
            </div>
            
        )
    }
}

//connect ()()
const  mapStatetoProps = (state: RootState) =>{
    return {
        //prop: data from the store
        code: state.currency,
    };

};

export default connect(mapStatetoProps)(Product);