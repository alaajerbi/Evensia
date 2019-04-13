import React, { Component } from 'react';
import {Table, Button} from "react-bootstrap";
import { FaCheck} from 'react-icons/fa';
import '../assets/css/Guests.css';

class Guests extends Component {
    render() {
        let guests= [
            {
                id: 0,
                name : "Sami Belaid",
                phone: 92114192,
                description: "invited as an honorable guest",
                presence: true
            },
            {
                id: 1,
                name : "Alaa Jerbi",
                phone: 55584876,
                description: "invited as an honorable guest",
                presence: true
            },
            {
                id: 2,
                name : "Ali Slama",
                phone: 41651951,
                description: "invited as an honorable guest",
                presence: false
            }
        ]
        return (
            <div>
                <h3>Guests</h3>
                <Table>
                    <thead>
                    <tr>
                        <th>N°</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Description</th>
                        <th>Presence</th>
                    </tr>
                    </thead>
                    <tbody>

                        {guests.map(guest =>
                            <tr>
                                <td>{guest.id}</td>
                                <td> {guest.name} </td>
                                <td> {guest.phone}</td>
                                <td>{guest.description}</td>
                                {guest.presence ? (
                                    <td><h3> <FaCheck /></h3></td>
                                ) : (
                                    <td><h3></h3></td>
                                )}

                            </tr>
                            )}



                    </tbody>

                </Table>
                <Button variant="danger" className="float-right" style={{marginRight:"20px"}} onClick={this.handleClick} >
                    Add Guest
                </Button>
            </div>
        );
    }
}
export default Guests ;
