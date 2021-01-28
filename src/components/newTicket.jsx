import React, {useContext, useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import {TicketContext} from './App'
import {Redirect} from 'react-router-dom'

const NewTicket = () => {

    const {ticketValue, contactValue, agentValue} = useContext(TicketContext);

    const [contacts, setContacts] = contactValue;
    const [agents, setAgents] = agentValue;

    const [redir, setRedir] = useState(false)

    const type = ['question', 'incident', 'problem', 'feature request', 'refunds & returns', 'order'];
    const status = ['open', 'pending', 'closed', 'waiting on customer']
    const priority = ['low', 'medium', 'high', 'urgent']

    const onFormSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target),
              formDataObj = Object.fromEntries(formData.entries())
        console.log(formDataObj)
        fetch('http://localhost:5500/add-ticket', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formDataObj)
        }).then((res) => res.json())
        .then(res => {
            setRedir(!redir)
        })
        
    }

    if (redir) {
        return <Redirect to="/" push={true} />
    }

    return (
       <div style={{fontSize: '1rem'}}>
           <Form onSubmit={onFormSubmit}>
            <Form.Group controlId="exampleForm.Controlsubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="subject of the ticket" name='subject'/>
            </Form.Group>
           <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Contact</Form.Label>
                <Form.Control as="select" name="contact">
                    {contacts.map((contact) => 
                        <option value={contact._id}>{contact.name}</option>
                    )}
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>Type</Form.Label>
                <Form.Control as="select" name='type'>
                    {type.map((type) => 
                        <option>{type}</option>
                    )}
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect3">
                <Form.Label>Status</Form.Label>
                <Form.Control as="select" name='status'>
                    {status.map((st) => 
                        <option>{st}</option>
                    )}
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect4">
                <Form.Label>Agent</Form.Label>
                <Form.Control as="select" name='agent'>
                    {agents.map((agent) =>
                        <option value={agent._id}>{agent.name}</option>
                    )}
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect4">
                <Form.Label>Priority</Form.Label>
                <Form.Control as="select" name='priority'>
                    {priority.map((priority) =>
                        <option>{priority}</option>
                    )}
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder='description of the ticket goes here...' name='description' />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
       </div>
    )
}

export default NewTicket;