export enum AddressType {
    ShippingAddress = 0,
    BillingAddress = 1
}

export class AddressModel{
    name: string;
    phone: string;
    street: string;
    district: number;
    province: string;
    type: number;

    constructor(){}
}