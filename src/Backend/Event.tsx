import Project from "./Project";

export default class Event {
    public name: string;
    public parentProject: Project;
    public start: Date;
    public end: Date;
    public description: string;
    
    constructor(parentProject: Project, name1: string,
         start: Date, end: Date, description: string) {
        this.name = name1;
        this.parentProject = parentProject;
        this.start = start;
        this.end = end;
        this.description = description;
    }
   
}
