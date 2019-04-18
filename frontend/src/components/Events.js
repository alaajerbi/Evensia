import React, { Component } from 'react';
import {Row, Col} from "react-bootstrap";
import {Event} from "./components";
import axios from "axios";

const api = "http://localhost:3009/events"

class Events extends Component {

    constructor(props) {
        super(props);

        this.state = {
            events: [],
        };
    }


    fetchData() {
        axios.get(api)
            .then(response => {
                this.setState({ events: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    componentDidMount(){
        this.fetchData();
    }

    render() {
        return (
            <div>
                <h4>Upcoming events</h4>
                <Row>
                    {this.state.events.map(item =>
                        <Col lg="3">
                            <Event
                            name={ item.name}
                            date={item.date}
                            img={"https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"}
                            />
                        </Col>
                    )}

                </Row>
            </div>
        );
    }
}
export default Events ;
