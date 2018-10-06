
import Class from "./Class";
import User from "./User";


export default class Project{
    name: string;
    classs: Class;
    //length is number of hours per week
    length: number; 
    members:User[]; 
    
    constructor(newClass : Class, newName: string) {
        this.name = newName; 
        this.classs = newClass;
    }
   
    public getName(){
        return name;
    }
    public setName(name: string){
        this.name = name;
    }
    public getClass(){
        return this.classs;
    }
    public setClass(newClass: Class){
        this.classs = newClass;
    }
    public setLength(length: number){
        this.length = length;
    }
    public addMember(member:User){
        this.members.push(member); 
    }
    
}