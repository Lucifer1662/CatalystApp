import * as React from "react";
import EventDisplay from "./EventDisplay";
import Event from '../Backend/Event';

interface IProps{
    events: Event[];
}

export default class WeekCalendar extends React.Component<IProps>{
   
    public render(){
        const { events } = this.props;
        return(
            <div>
                {events.map(item => (
                    <EventDisplay eventData={item} />
                ))}
            </div>

        );
    }
}