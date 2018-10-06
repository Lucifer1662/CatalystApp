import * as React from "react";
import WeekCalendar from "./WeekCalendar"
import EventDisplay from './EventDisplay';
import Event from '../Backend/Event';
import Project from '../Backend/Project';
import Class from '../Backend/Class';

export default class WeekCalendarPage extends React.Component{

    render(){
        const c = new Class();

        return (    
            <WeekCalendar events={[
                new Event(new Project(c,"Assignment 1"), "math",
                 new Date("2018-12-17T02:24:00"), new Date("2018-12-17T04:24:00"), "MyDescription")
            ]}/>        
        );
    }
}