import React, { Component } from 'react';
import {Table} from "react-bootstrap";

class Guests extends Component {
    render() {
        return (
            <div>
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
                    <tr>
                        <td>1</td>
                        <td>Sami Belaid</td>
                        <td>92114192</td>
                        <td>invited as an honorable guest</td>
                        <td>Present</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Alaa Jerbi</td>
                        <td>55584876</td>
                        <td>invited as an honorable guest</td>
                        <td>Present</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Ali Slama</td>
                        <td>41651951</td>
                        <td>invited as an honorable guest</td>
                        <td>Present</td>
                    </tr>
                    </tbody>

                </Table>
            </div>
        );
    }
}
export default Guests ;
