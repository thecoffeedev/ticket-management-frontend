import React, {useState, useContext} from 'react';
import {Form, Button} from 'react-bootstrap';
import {TicketContext} from './App'
import {Redirect} from 'react-router-dom'

const NewContact = () => {

    // const {ticketValue, contactValue, agentValue} = useContext(TicketContext);

    // const [tickets, setTickets] = ticketValue;
    // const [contacts, setContacts] = contactValue;
    // const [agents, setAgents] = agentValue;

    // const type = ['question', 'incident', 'problem', 'feature request', 'refunds & returns', 'order'];
    // const status = ['open', 'pending', 'closed', 'waiting on customer']
    // const priority = ['low', 'medium', 'high', 'urgent']

    const [redir, setRedir] = useState(false)

    const onFormSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target),
              formDataObj = Object.fromEntries(formData.entries())
        fetch('http://localhost:5500/new-contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formDataObj)
        }).then((res) => res.json())
        .then((res) => {
            setRedir(!redir)
        })
    }

    if (redir) {
        return <Redirect to="/contacts" push={true} />
    }

    return (
       <div style={{fontSize: '1rem'}}>
           <Form onSubmit={onFormSubmit}>
            <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter contact name" name='name'/>
            </Form.Group>
            <Form.Group controlId="email">
                <Form.Label>email</Form.Label>
                <Form.Control type="email" placeholder="Enter contact email" name='email'/>
            </Form.Group>
           
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
       </div>
    )
}

export default NewContact;