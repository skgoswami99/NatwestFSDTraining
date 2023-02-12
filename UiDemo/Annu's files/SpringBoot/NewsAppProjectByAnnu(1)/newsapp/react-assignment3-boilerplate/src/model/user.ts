export default class User{
    userId : number;
    username : string;
    password : string;

    constructor(username:string,password:string){
        this.userId = Math.random()*1000;
        this.username = username;
        this.password = password;
    }
}
