import { CartModel } from "./cart";
import { CartDetails } from "./CartDetails";

export class UserCartModel{
    id: string;
    email: string;
    userId: string;
    cartDetails: Array<CartModel>;
}