export enum CategoryStatus {
    Publish = 1,
    Unpublish
}

export class CategoryModel{
    id: string;
    name: string;
    description: string;
    status: number;

    constructor(){}
}