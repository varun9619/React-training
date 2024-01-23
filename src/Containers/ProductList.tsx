import React from "react";
import Product from "../components/Product";
import { ProductType } from "../types";
import { getProducts } from "../services/ProductService";

type State={plist:ProductType[]};

class ProductList extends React.Component{

    
    plist:ProductType[] = [];
    state: State={
        plist: []
    };
    componentDidMount() {
        this.getData();
    }
    getData(){
        getProducts()
            .then((res)=> {
                console.log("Response", res);
                this.state.plist = res.data; //mutating the state
                this.setState({plist:res.data});
            })
            .catch((e) => {
                console.log("error", e)
            });
        }
    
    
    render()  {     

        // const plist: ProductType[]=[{
           
        //     productId: 101,
        //     productName: 'Product 1',
        //     productImage: 'https://imgd.aeplcdn.com/1280x720/n/cw/ec/124013/hunter-350-right-front-three-quarter.jpeg?isig=0',
        //     productStock: 1,
        //     productPrice: '222000',
        //     productSalePrice: '200000',
        //     rating: 10
        // },
        // {
        //     productId: 102,
        //     productName: 'Product2',
        //     productImage: 'https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/royal-enfield-select-model-orange-crush-1668416867248.jpg?q=80',
        //     productStock: 100,
        //     productPrice: '420000',
        //     productSalePrice: '400000',
        //     rating: 11
        // },
        // {
        //     productId: 103,
        //     productName: 'Product3',
        //     productImage: 'https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/royal-enfield-select-model-orange-crush-1668416867248.jpg?q=80',
        //     productStock: 100,
        //     productPrice: '420000',
        //     productSalePrice: '400000',
        //     rating: 11
        // }];

        return(
            <div className="row" >   
                
                {
                    this.state.plist.map((item)=>
                    <Product 
                    key={item.productId} 
                    pdata={item} 
                    btnClick={(id) => console.log(id, ": add item")}/>)
                }
                {/* <Product pdata={plist} 
                    btnClick={(id) => console.log(id, ": add item")}/>  This when there is a single object to pass */}

                {/* <Product 
                    pdata={plist}
                    btnClick={(id) => console.log(id, ": add to cart and Navigate")} /> */}
                
                
            </div>

        )
    }
}

export default ProductList