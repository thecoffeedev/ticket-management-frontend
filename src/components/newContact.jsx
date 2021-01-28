import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import {Redirect} from 'react-router-dom'

const NewContact = () => {

    const [redir, setRedir] = useState(false)

    const onFormSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target),
              formDataObj = Object.fromEntries(formData.entries())
        fetch('https://ticketmg.herokuapp.com/new-contact', {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
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