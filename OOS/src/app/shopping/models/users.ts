export enum GenderType {
    Unknown = 1,
    Female = 2,
    Male = 3
}

export class UserModel{
    id: string;
    username: string;
    password:string;
    passwordConfirm: string;
    firstName:string;
    middleName:String;
    lastName:string;
    gender:number;
    image:string;
    email:string;
    constructor(){}
}