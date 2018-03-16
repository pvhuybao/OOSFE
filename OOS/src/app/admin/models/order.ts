import { OrderDetailModel } from "../Model/OrderDetail";
import { AddressModel } from "../Model/Address";

export class OrdersModel{
     id: string;
     email: string;
     userId: string;
     orderDetails: Array<OrderDetailModel>;
     address: AddressModel;
     total: number;
     status: number;
     createdDate: string;
     createdBy: string;
     modifiedDate: string;
     modifiedBy: string;
     updateDate: string;

    constructor(){}
}