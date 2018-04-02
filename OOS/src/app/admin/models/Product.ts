import { ProductTail } from "./ProductTail";

 export enum ProductStatus {
     Publish = 1,
     Unpublish
 }

export class ProductModel{
    id: string;
    code: string;
    name: string;
    price: number;
    description : string;
    image : string;
    idCategory: string;
    status: number;  
    categoryName:string;
    productTails:ProductTail[];
    minPrice:number;
    maxPrice:number;
    totalQuantity:number;
    constructor () {}
    defaultImage:string;

}

