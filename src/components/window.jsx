import React from 'react';
import TicketCards from './ticketCards.jsx';
import AgentCards from './agentCards.jsx'
import ContactCards from './contactCards'
import NewTicket from './newTicket'
import NewAgent from './newAgent'
import NewContact from './newContact'

const BodyWindow = (props) => {
    if (props.page === 'agents'){
        return (
            <div className='col-12 window m-3 rounded p-3 container'>
                <AgentCards />
            </div>
        );
    }else if (props.page === 'contacts'){
        return (
            <div className='col-12 window m-3 rounded p-3 container'>
                <ContactCards />
            </div>
        );
    }else if (props.page === 'newTicket'){
        return (
            <div className='col-12 window m-3 rounded p-3 container'>
                <NewTicket />
            </div>
        )
    }else if (props.page === 'newAgent'){
        return (
            <div className='col-12 window m-3 rounded p-3 container'>
                <NewAgent />
            </div>
        )
    }else if (props.page === 'newContact'){
        return (
            <div className='col-12 window m-3 rounded p-3 container'>
                <NewContact />
            </div>
        )
    }
    return (
        <div className='col-12 window m-3 rounded p-3 container'>
            <TicketCards />
        </div>
    );
}

export default BodyWindow;