// export enum FeedbackStatus {
//     Publish = 1,
//     Unpublish
// }

export class FeedbackModel{
    id: string;
    toEmail: string;
    status: boolean;
    content : string;
    subject : string;
    constructor(){}
}