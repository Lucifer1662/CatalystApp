import * as React from "react";
import Event from "../Backend/Event";

interface IProps{
    eventData: Event;
}

export default class EventDisplay extends React.Component<IProps>{
    render(){
        return (
                <div>
                    <p> {this.props.eventData.name} </p>
                    
                </div>

        );
    }
}