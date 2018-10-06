import Class from "./Class";

export default class User {
    name: string;
    class:Class[]; 
    score: number; 

    
    constructor(name: string) {
        this.name = name;
        this.score = 0; 
    }
   
    public getName(){
        return name;
    }
    public setName(name: string){
        this.name = name;
    }
    public addClass(newClass:Class){
        this.class.push(newClass);
    }
    public addClasses(newClasses:Class[]){
        this.class.push(newClasses);
    }
    public addPoints(point: number){
        this.score += point; 
    }
}
