
import Class from "./Class";
import User from "./User";


export default class Project{
    name: string;
    class: Class;
    //length is number of hours per week
    length: number; 
    members:User[]; 
    
    constructor(newClass : Class, newName: string) {
        this.name = newName; 
        this.class = newClass;
    }
   
    public getName(){
        return name;
    }
    public setName(name: string){
        this.name = name;
    }
    public getClass(){
        return class{};
    }
    public setClass(newClass: Class){
        this.class = newClass;
    }
    public setLength(length: number){
        this.length = length;
    }
    public addMember(member:User){
        this.members.push(member); 
    }
    public addMembers(newMembers:User[]){
        this.members.push(newMembers);
    }
    

}