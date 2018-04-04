export enum GenderType {
    Unknown = 0,
    Female = 1,
    Male = 2
}

export class UserModel{
    id: string;
    username: string;
    password:string;
    passwordConfirm: string;
    firstName:string;
    lastName:string;
    gender:number;
    image:string;
    email:string;
    token:string;
    constructor(){}
}