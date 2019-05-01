import React, { Component } from "react";
import axios from "axios";
import EventForm from '../components/EventForm';

const api = "http://localhost:3009/events/";

class EditEvent extends Component {
  state = {
    event: null
  };

  componentDidMount() {
    const { eventId } = this.props.match.params;

     
    axios
      .get(api + eventId)
      .then(res => {
        const event = res.data;
        const date = new Date(event.date);
        event.date = date.toISOString().split('T')[0].split('-').reverse().join('/');
        this.setState({
          event
        });
      })
      .catch(err => console.log(err));
  }

  handleEdit(event) {
    let { _id, name, description, date, location, designColor } = event;

      axios.put(api + _id, {
        name,
        description,
        date,
        location,
        designColor
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  render() {
      const {event} = this.state;
   
      if(event !== null && event !== undefined) {
        return ( <EventForm name={event.name} 
          description={event.description}
          date={event.date}
          location={event.location}
          designColor={event.designColor}
          
          submitBtn='Edit event'
          onSave={this.handleEdit}
          />);
      }
      else {
        return <p>Loading...</p>
      }
  }
}

export default EditEvent;
