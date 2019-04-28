import React, { Component } from 'react';

class Event extends Component {
    render() {
        const { name, date, img } = this.props;
        return (
            <div style={{  backgroundImage: "url(" + img + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',}}>
                <h5 style={{
                    color: "white",
                    paddingTop: 120
                }}>{name}</h5>
                <h6 style={{
                    color: "white"
                }}>{date}</h6>
            </div>
        );
    }
}
export default Event;
