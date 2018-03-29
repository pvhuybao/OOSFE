 export enum ProductStatus {
     Publish = 1,
     Unpublish
 }

export class ProductModel{
    id: string;
    code: string;
    name: string;
    price: number;
    description : string;
    image : string;
    idCategory: string;
    status: number;  
    categoryName:string;
    // color : string;
    // size : string;
    constructor () {}
}

