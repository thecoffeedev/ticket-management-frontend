import React, {useContext, useState} from "react";
import TicketIcon from './ticketIcons.jsx';
import {TicketContext} from './App'
import mail from '../assets/images/mail.png';
import clock from '../assets/images/clock.png';

const TicketCards = (props) => {

    const {ticketValue, contactValue, agentValue} = useContext(TicketContext);

    const [tickets, setTickets] = ticketValue;
    const [contacts, setContacts] = contactValue;
    const [agents, setAgents] = agentValue;

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const returnDate = (dt) => {
        const t = new Date(dt)
        let monthFull= [];
        monthFull[0]="January";
        monthFull[1]="February";
        monthFull[2]="March";
        monthFull[3]="April";
        monthFull[4]="May";
        monthFull[5]="June";
        monthFull[6]="July";
        monthFull[7]="August";
        monthFull[8]="September";
        monthFull[9]="October";
        monthFull[10]="November";
        monthFull[11]="December";
        const date = ('0' + t.getDate()).slice(-2);
        const month = t.getMonth();
        const year = t.getFullYear();
        const hours = ('0' + t.getHours()).slice(-2);
        const minutes = ('0' + t.getMinutes()).slice(-2);
        const time = `${hours}:${minutes} @ ${date} ${monthFull[month]},${year} `;
        return time;
    }

    return (
        <React.Fragment>
            {tickets.map((ticket) => (
                <div key={ticket._id} className='rounded m-2 mb-4 p-2 bg-white border-dark'>
                    <div className='p-0 d-inline-block'>
                        <TicketIcon title={ticket.subject.charAt(0).toUpperCase()} />
                    </div>
                    <div className='pl-3 d-inline-block card-content-block'>
                        <div className='d-inline-block'>
                            <h2 className='d-inline-block'>{capitalizeFirstLetter(ticket.subject)}</h2><br />
                        </div>
                    </div>
                    <div className='ml-3'>
                        <img className='d-inline-block' src={mail} alt='contact' width='24px' />
                        {console.log()}
                        <h5 className='d-inline-block ml-3' style={{fontWeight: 'normal'}}>{capitalizeFirstLetter(contacts.filter((data) => data._id === ticket.contact)[0].name)}</h5><br />
                        <img className='d-inline-block' src={clock} alt='clock' width='24px' />
                        <h5 className='d-inline-block ml-3' style={{fontWeight: 'normal'}}>{returnDate(ticket.created_at)}</h5>
                    </div>
                    <div key={ticket._id} className=' select-div m-3'>
                        <form>
                            <label htmlFor='priority'>Priority : </label>
                            <select className='select-items bg-light form-control' id='priority' defaultValue={ticket.priority} onChange={(e) => setTickets([...tickets].map((data) => data._id === ticket._id ? {...data, priority : e.target.value} : data ))}>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                                <option value="urgent">Urgent</option>
                            </select><br />
                            <label htmlFor='status'>Status : </label>
                            <select className='select-items bg-light form-control' id='status'  defaultValue={ticket.status} onChange={(e) => setTickets([...tickets].map((data) => data._id === ticket._id ? {...data, status : e.target.value} : data ))}>
                                <option value="open">Open</option>
                                <option value="pending">Pending</option>
                                <option value="closed">Closed</option>
                                <option value="waiting on customer">Waiting on Customer</option>
                            </select><br />
                            <label htmlFor='agent'>Agent : </label>
                            <select className='select-items bg-light form-control' id='agent'   defaultValue={ticket.agent} onChange={(e) => setTickets([...tickets].map((data) => data._id === ticket._id ? {...data, agent : e.target.value} : data ))}>
                                {agents.map((agent) => <option key={agent._id} value={agent._id}>{agent.name}</option>)}
                            </select>
                        </form>
                    </div>
                    <button type='button' className='btn btn-primary ml-3 mb-2'>view ticket</button>
                </div>
            ))}
        </React.Fragment>
    );
}

export default TicketCards;