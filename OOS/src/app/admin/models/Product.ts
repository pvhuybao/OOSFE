import { ProductTail } from "./ProductTail";

 export enum ProductStatus {
     Publish = 1,
     Unpublish
 }

export class ProductModel{
    id: string;
    code: string;
    name: string;
    description : string;
    details:string;
    idCategory: string;
    status: number;  
    categoryName:string;
    productTails:ProductTail[];
    constructor () {}
    minPrice:number;
    maxPrice:number;
    totalQuantity:number;
    defaultImage:string;
}

