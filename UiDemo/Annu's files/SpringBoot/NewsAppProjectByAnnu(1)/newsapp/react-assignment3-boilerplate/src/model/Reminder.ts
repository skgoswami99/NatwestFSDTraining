export default class Reminder{
    reminderId : string;
    schedule : Date;
        constructor(reminderId:string,schedule:Date){
            this.reminderId = reminderId;
            this.schedule = schedule;
        }
    }