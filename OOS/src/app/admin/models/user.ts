export enum GenderType {
    Male = 1,
    Female = 2
}

export class UserModel{
    id:string
    username: string;
    password:string;
    passwordConfirm: string;
    firstName:string;
    lastName:string;
    image:string;
    gender:number;
    email:string;
    token:string;
    constructor(){}
}