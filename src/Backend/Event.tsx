import Project from "./Project";

export default class Event {
    public name: string;
    private parentProject: Project;
    
    constructor(name1: string) {
        this.name = name1;
    }
   
}
