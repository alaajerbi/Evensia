import React, { Component } from "react";
import axios from "axios";

class Event extends Component {
  state = {
    event: null
  };
  componentDidMount() {
    const { eventId } = this.props.match.params;
    const api = "http://localhost:3009/events/" + eventId;
    axios
      .get(api)
      .then(res => {
        this.setState({
          event: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    let { event } = this.state;
    return (
        (!event && <p>Loading..</p>)
        || (<p>{event.name}</p>)
    )
  }
}

export default Event;
