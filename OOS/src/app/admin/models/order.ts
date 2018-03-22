
import { OrderDetailModel } from "../models/OrderDetail";
import { AddressModel } from "../models/Address";

export class OrdersModel{
    idBill:string;
    email: string;
    userId: string;
    orderDetails: Array<OrderDetailModel>;
    address: Array<AddressModel>;
    total: number;
    status: number
    constructor(){
        
    }
}