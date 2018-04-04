export enum GenderType {
    Unknown = 1,
    Female = 2,
    Male = 3
}

export class CreateUserModel{
    id: string;
    username: string;
    password:string;
    passwordConfirm: string;
    firstName:string;
    middleName:String;
    lastName:string;
    gender:number;
    email:string;
    token:string;
    constructor(){}
}