export enum Currency {
    VND = 1,
    USD
}

export class ConfigurationModel{
    id: string="1";
    carousel:string[];
    currency: number;
    shippingReturnHtml: string;
    shippingGuideHtml: string;
    faqHtml: string;
    constructor(){}
}