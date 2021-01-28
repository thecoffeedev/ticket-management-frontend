import React, {useState, useContext} from 'react';
import {Form, Button} from 'react-bootstrap';
// import {TicketContext} from './App'
import {Redirect} from 'react-router-dom'

const NewAgent = () => {

    // const {ticketValue, contactValue, agentValue} = useContext(TicketContext);

    // const [tickets, setTickets] = ticketValue;
    // const [contacts, setContacts] = contactValue;
    // const [agents, setAgents] = agentValue;

    const [redir, setRedir] = useState(false);

    const role = ['agent', 'admin']
    const type = ['full-time', 'occational'];

    const onFormSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target),
              formDataObj = Object.fromEntries(formData.entries())
        fetch('http://localhost:5500/new-agent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formDataObj)
        }).then((res) => res.json())
        .then((res) => setRedir(!redir))
    }

    if (redir) {
        return <Redirect to="/agents" push={true} />
    }

    return (
       <div style={{fontSize: '1rem'}}>
           <Form onSubmit={onFormSubmit}>
            <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter agent name" name='name'/>
            </Form.Group>
            <Form.Group controlId="email">
                <Form.Label>email</Form.Label>
                <Form.Control type="email" placeholder="Enter agent email" name='email'/>
            </Form.Group>
            <Form.Group controlId="role">
                <Form.Label>Role</Form.Label>
                <Form.Control as="select" name='role'>
                    {role.map((st) => 
                        <option>{st}</option>
                    )}
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="type">
                <Form.Label>Type</Form.Label>
                <Form.Control as="select" name='type'>
                    {type.map((st) => 
                        <option>{st}</option>
                    )}
                </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
       </div>
    )
}

export default NewAgent;