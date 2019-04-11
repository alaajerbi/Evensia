import React, { Component } from 'react';
import {Row, Col} from "react-bootstrap";

class Events extends Component {
    render() {
        let my_events= [0,1,2,3,4,5,6,7,8,9,7,8,9,7,8,9,7,8,9,7,8,8,8,8,8,8,8,8,8,]
        return (
            <div>
                <Row>
                    {my_events.map(item =>
                        <Col lg="3">
                            <div style={{backgroundColor: "yellow"}}>
                                {item}
                            </div>

                        </Col>
                    )}

                </Row>
            </div>
        );
    }
}
export default Events ;
