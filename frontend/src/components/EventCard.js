import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function EventCard(props) {
  const {
    _id,
    name,
    description,
    date,
    location,
    designColor
  } = props.event;
  const dateStr = new Date(Date.parse(date)).toDateString();
  return (
    <Card style={{ borderColor: designColor, width: "18rem" }}>
      <Card.Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: designColor,
          color: "white"
        }}
      >
        <b>{name}</b>
        <FontAwesomeIcon
          icon={faTimes}
          style={{ cursor: "pointer" }}
          onClick={() => {
            props.onEventDelete(_id);
          }}
        />
      </Card.Header>
      <Card.Body style={{ }}>
        {/* <Card.Title style={{ fontSize: "1em" }}>
          
        </Card.Title> */}
        <Card.Subtitle className="mb-2 text-muted"><b>Date:</b> {dateStr}</Card.Subtitle>

        <Card.Subtitle className="mb-2 text-muted"><b>Location:</b> {location}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <Link to={"/event/" + _id}>
          <Card.Link>
            <Button variant="light">Go to event page</Button>
          </Card.Link>
        </Link>
      </Card.Body>
    </Card>
  );
}
export default EventCard;
