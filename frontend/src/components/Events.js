import React, { Component } from 'react';
import {Row, Col} from "react-bootstrap";
import {Event} from "./components";
import { Alert, AlertLink, Container } from 'react-bootstrap'; 
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
                console.log(response.data);
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
        let {events} = this.state;
        return (
            <Container className='mt-5'>
               {
                   (events.length === 0 && 
                   <Alert variant='warning'>
                    You've got no events right now. Start by <Alert.Link href="events/create">creating a new event.</Alert.Link>
                   </Alert>)

                   ||

                   events.map((event, id) => {
                        return (<Event 
                        name={event.name}
                        date={event.date}
                        img={event.img} />)
                   })

               }
            </Container>
        );
    }
}
export default Events ;
