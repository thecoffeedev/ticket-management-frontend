import React, {useContext} from 'react';
import {TicketContext} from './App'
import ContactIcon from './contactIcons'

const ContactCards = () => {

    const {ticketValue, contactValue, agentValue} = useContext(TicketContext);

    const [tickets, setTickets] = ticketValue;
    const [contacts, setContacts] = contactValue;
    const [agents, setAgents] = agentValue;

    return (
        <div className='text-center'>
            {contacts.map((contact) => (
                <div key={contact._id} className='rounded m-3 p-3 bg-white border-dark d-inline-block text-center' style={{width: '350px'}}>
                    <div className='p-0 d-inline-block'>
                        <ContactIcon title={contact.name.charAt(0).toUpperCase()} />
                    </div>
                    <h3>Name: {contact.name}</h3>
                    <h5>Email: {contact.email}</h5>
                    {/* <button type='button' className='btn btn-primary m-2'>Assign ticket</button> */}
                    <button type='button' className='btn btn-secondary m-2'>Contact</button>
                </div>
            ))}
        </div>
    )
}

export default ContactCards;