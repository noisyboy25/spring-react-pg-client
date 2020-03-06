import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const MyForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    return (
        <div>
            <Form onSubmit={(e) => {
                e.preventDefault();
                props.handleAdd({ firstName, lastName });
            }}>
                <Form.Group >
                    <Form.Label>First name </Form.Label>
                    <Form.Control type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
                </Form.Group>
                <Form.Group >
                <Form.Label>Last name </Form.Label>
                    <Form.Control type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
                </Form.Group>
                <Button type="submit">Add</Button>
            </Form>
        </div>
    );
}

export default MyForm;
