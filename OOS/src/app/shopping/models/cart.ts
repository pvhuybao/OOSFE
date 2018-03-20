import { ProductModel } from "./product";

export class CartItemModel{
    id: string;
    product: ProductModel;
    quantity:number;
    amount:number;
    constructor(){}
}
export class CartsModel{
    total:number=0;
    items:CartItemModel[];
    constructor(){}
}