export enum GenderType {
    Male = 1,
    Female = 2
}

export class UserModel{
    id:string
    userName: string;
    password:string;
    passwordConfirm: string;
    firstName:string;
    middleName:String;
    lastName:string;
    image:string;
    gender:number;
    email:string;
    token:string;    
    photo:string;
    phoneNumber:string;
    country:string;
    dateOfBirth:string
    constructor(){}
}