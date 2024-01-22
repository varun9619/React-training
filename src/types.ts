//to hold all the custom data type definitions
//bit.ly/2Ee7HOL

export interface ProductType {
    productId:        number;
    productName:      string;
    productImage:     string; //for local image it has to be in public folder
    productStock:     number;
    productPrice:     string;
    productSalePrice: string;
    rating:           number;
}
