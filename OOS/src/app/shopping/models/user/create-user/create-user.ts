export enum GenderType {
    Unknown = 1,
    Female = 2,
    Male = 3
}

export class CreateUserModel{
    password:string;
    passwordConfirm: string;
    firstName:string;
    middleName:String;
    lastName:string;
    image:string;
    gender:number;
    email:string;
    token:string;
    constructor(){}
}