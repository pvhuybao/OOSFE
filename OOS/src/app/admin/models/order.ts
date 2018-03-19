
import { OrderDetailModel } from "../models/OrderDetail";
import { AddressModel } from "../models/Address";

export class OrdersModel{
     id: string;
     email: string;
     userId: string;
     orderDetails: Array<OrderDetailModel>;
     address: Array<AddressModel>;
     total: number;
     status: number;
     createdDate: string;
     createdBy: string;
     modifiedDate: string;
     modifiedBy: string;
     updateDate: string;

    constructor(){}
}