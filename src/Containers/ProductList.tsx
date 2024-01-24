import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { ProductType } from "../types";
import { getProducts } from "../services/ProductService";
import { connect, useDispatch } from "react-redux";
import { addItem } from "../store/slices/cartSlice";
import { Dispatch } from "@reduxjs/toolkit";
import Column from "../components/Column";
import useProductList from "../hooks/useProductList";

type State={plist:ProductType[]};
type Props={add:(item:ProductType)=>void};

// class ProductList extends React.Component<Props>{

    
//     plist:ProductType[] = [];
//     state: State={
//         plist: []
//     };
//     componentDidMount() {
//         this.getData();
//     }
//     getData(){
//         getProducts()
//             .then((res)=> {
//                 console.log("Response", res);
//                 this.state.plist = res.data; //mutating the state
//                 this.setState({plist:res.data});
//             })
//             .catch((e) => {
//                 console.log("error", e)
//             });
//         }
    
    
//     render()  {     

//         // const plist: ProductType[]=[{
           
//         //     productId: 101,
//         //     productName: 'Product 1',
//         //     productImage: 'https://imgd.aeplcdn.com/1280x720/n/cw/ec/124013/hunter-350-right-front-three-quarter.jpeg?isig=0',
//         //     productStock: 1,
//         //     productPrice: '222000',
//         //     productSalePrice: '200000',
//         //     rating: 10
//         // },
//         // {
//         //     productId: 102,
//         //     productName: 'Product2',
//         //     productImage: 'https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/royal-enfield-select-model-orange-crush-1668416867248.jpg?q=80',
//         //     productStock: 100,
//         //     productPrice: '420000',
//         //     productSalePrice: '400000',
//         //     rating: 11
//         // },
//         // {
//         //     productId: 103,
//         //     productName: 'Product3',
//         //     productImage: 'https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/royal-enfield-select-model-orange-crush-1668416867248.jpg?q=80',
//         //     productStock: 100,
//         //     productPrice: '420000',
//         //     productSalePrice: '400000',
//         //     rating: 11
//         // }];

//         return(
//             <div className="row" >   
                
//                 {
//                     this.state.plist.map((item)=>
//                     // <Product 
//                     // key={item.productId} 
//                     // pdata={item} 
//                     // btnClick={(id) => this.props.add(item)} />
//                     <Column size={3} key={item.productId}>
//                         <Product 
//                                 key={item.productId}
//                                 pdata={item}
//                                 btnClick={(id) => this.props.add(item)} />
//                     </Column>
//                 )}
//                 {/* <Product pdata={plist} 
//                     btnClick={(id) => console.log(id, ": add item")}/>  This when there is a single object to pass */}

//                 {/* <Product 
//                     pdata={plist}
//                     btnClick={(id) => console.log(id, ": add to cart and Navigate")} /> */}
                
                
//             </div>

//         )
//     }
// }

// const mapDispatchtoProps=(dispatch: Dispatch)=>{
//     return{
//         //prop: dispatch(action)
//         add: (item:ProductType) => dispatch(addItem(item)),
//     };
// };

// //connect(fetchingdata, updatingdata)(component)
// export default connect(null, mapDispatchtoProps)(ProductList)

function ProductList() {
    const plist = useProductList();
    const dispatch = useDispatch();
    

    return (
        <div className="row">
            {plist.map((item, index)=> (
                <Column size={3} key={item.productId}>
                      <Product 
                               pdata={item}
                               btnClick={(id) => dispatch(addItem(item))} />
                    </Column>
            ))}

        </div>
    )
}

export default ProductList;