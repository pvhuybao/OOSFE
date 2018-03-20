import { ProductModel } from "./product";

export class CartModel{
    id: string;
    product: ProductModel;
    quantity:number;
    total:number;
    constructor(){}
}