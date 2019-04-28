import React, { Component } from 'react';
import {Card} from 'react-bootstrap';

class EventCard extends Component {
    render() {
        const { name, description, date, color } = this.props;
        const dateObj = new Date( Date.parse(date)).toDateString();
        return (
            <Card text="white" style={{ backgroundColor:color, width: '18rem' }}>
            <Card.Header><b>Date:</b> {dateObj}</Card.Header>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
               {description}
              </Card.Text>
            </Card.Body>
          </Card>
        );
    }
}
export default EventCard;
