import React from 'react'
import { Table } from 'react-bootstrap';

const UserList = (props) => {
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Second Name</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map(u => <tr key={u._links.self.href}>
                        <td>{u.firstName}</td>
                        <td>{u.lastName}</td>
                    </tr>)}
                </tbody>
            </Table>

        </div>
    );
}

export default UserList;