import { OrderDetailModel } from "./OrderDetail";
import { AddressModel } from "./address";


export class OrdersModel{
    id: string;
    idBill:string;
    email: string;
    userId: string;
    orderDetails: Array<OrderDetailModel>;
    address: Array<AddressModel>;
    total: number;
    status: number;
    
    constructor(){}
}