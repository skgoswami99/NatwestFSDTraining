export default class UserProfile{
    username : string;
    firstName : string;
    lastName : string;
    contact : string;
    email : string;

    constructor(username:string,firstName:string,lastName:string,contact:string,email:string){
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.contact = contact;
        this.email = email;
    }
}
