import * as React from "react";
import EventDisplay from "./EventDisplay";
import Event from '../Backend/Event';

interface IProps{
    events: Event[];
}

export default class WeekCalendar extends React.Component<IProps>{
   
    public render(){
        const { events } = this.props;
        return (
        <div>
            <div style={{position: "absolute", marginTop: 0, marginLeft: 10}}>
                <div style={{minHeight:100}}>
                12:00am
                </div>
                <div style={{minHeight:100}}>
                1:00am
                </div>
                <div style={{minHeight:100}}>
                2:00am
                </div>
                <div style={{minHeight:100}}>
                3:00am
                </div>
                <div style={{minHeight:100}}>
                4:00am
                </div>
                <div style={{minHeight:100}}>
                5:00am
                </div>
                <div style={{minHeight:100}}>
                6:00am
                </div>
                <div style={{minHeight:100}}>
                7:00am
                </div>
                <div style={{minHeight:100}}>
                8:00am
                </div>
                <div style={{minHeight:100}}>
                9:00am
                </div>
                <div style={{minHeight:100}}>
                10:00am
                </div>
                <div style={{minHeight:100}}>
                11:00am
                </div>
                <div style={{minHeight:100}}>
                12:00pm
                </div>
                <div style={{minHeight:100}}>
                1:00pm
                </div>
                <div style={{minHeight:100}}>
                2:00pm
                </div>
                <div style={{minHeight:100}}>
                2:00pm
                </div>
            </div>
            <div>
                {events.map(item => (
                    <EventDisplay eventData={item} />
                ))}
            </div>
        </div>
        );
    }
}