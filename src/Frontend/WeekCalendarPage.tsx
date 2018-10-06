import * as React from "react";
import WeekCalendar from "./WeekCalendar"
import EventDisplay from './EventDisplay';
import Event from '../Backend/Event';

export default class WeekCalendarPage extends React.Component{

    render(){
        return (    
            <WeekCalendar events={[new Event("math")]}/>        
        );
    }
}