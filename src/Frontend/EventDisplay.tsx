import * as React from "react";
import Event from "../Backend/Event";

interface IProps{
    eventData: Event;
}

export default class EventDisplay extends React.Component<IProps>{
    
    render(){
        let h:number = this.props.eventData.end.getTime() - this.props.eventData.start.getTime();
        h = h/(1000*60*60);
        const startDay = new Date(this.props.eventData.start.getTime());
        startDay.setHours(0); startDay.setMinutes(0); startDay.setSeconds(0);
        let offset =  this.props.eventData.start.getTime() - startDay.getTime();
        offset = offset/(1000*60*60);
        return (
                <div style={{height: 100*h, marginTop: 100*offset, border:"medium solid"}}>
                    <p> {this.props.eventData.name} </p>
                    <p> {offset} </p>
                    <p> {this.props.eventData.description} </p>
                </div>

        );
    }
}