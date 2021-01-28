import React, {useContext, useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import {TicketContext} from './App'
import {Redirect} from 'react-router-dom'

const NewTicket = () => {

    const {contactValue, agentValue} = useContext(TicketContext);

    const [contacts] = contactValue;
    const [agents] = agentValue;

    const [redir, setRedir] = useState(false)

    const type = ['question', 'incident', 'problem', 'feature request', 'refunds & returns', 'order'];
    const status = ['open', 'pending', 'closed', 'waiting on customer']
    const priority = ['low', 'medium', 'high', 'urgent']

    const onFormSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target),
              formDataObj = Object.fromEntries(formData.entries())
        console.log(formDataObj)
        fetch('https://ticket-mg.netlify.app/add-ticket', {
            method: "POST",
            headers: {
                'Access-Control-Allow-Origin': '*',
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
                        <option key={contact._id} value={contact._id}>{contact.name}</option>
                    )}
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>Type</Form.Label>
                <Form.Control as="select" name='type'>
                    {type.map((type, index) => 
                        <option key={index}>{type}</option>
                    )}
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect3">
                <Form.Label>Status</Form.Label>
                <Form.Control as="select" name='status'>
                    {status.map((st, index) => 
                        <option key={index}>{st}</option>
                    )}
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect4">
                <Form.Label>Agent</Form.Label>
                <Form.Control as="select" name='agent'>
                    {agents.map((agent) =>
                        <option key={agent._id} value={agent._id}>{agent.name}</option>
                    )}
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect4">
                <Form.Label>Priority</Form.Label>
                <Form.Control as="select" name='priority'>
                    {priority.map((priority, index) =>
                        <option key={index}>{priority}</option>
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