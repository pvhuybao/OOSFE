import {Address} from './address';
import {OrderDetails} from './orders-detail';
export class Orders{
    Id :string;

    Email :string;

    UserId :string;

    OrderDetails: OrderDetails[];

    Address: Address[];

    Total :number;
    
    constructor(){}

}