import Project from "./Project";

export default class Event {
    name: string;
    parentProject: Project;
    
    constructor(name: string) {
        
        this.name = name;
    }
   
    public getName(){
        return name;
    }
    public setName(name: string){
        this.name = name;
    }
}
