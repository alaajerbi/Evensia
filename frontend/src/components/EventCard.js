import React from "react";
import { Card } from "react-bootstrap";

function EventCard(props) {
  const { _id, name, description, date, location, designColor } = props.event;
  const dateObj = new Date(Date.parse(date)).toDateString();
  return (
    <Card style={{ borderColor: designColor, width: "18rem" }}>
      <Card.Header style={{ backgroundColor: designColor, color: "white" }}>
        {name}
      </Card.Header>
      <Card.Body>
        <Card.Title style={{fontSize: '1.2em'}}>
          <b>Date:</b> {dateObj}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{location}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <Card.Link href={"event/" + _id}>Go to event page</Card.Link>
      </Card.Body>
    </Card>
  );
}
export default EventCard;
