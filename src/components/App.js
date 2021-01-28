import React, {useState, useEffect, createContext} from 'react';
import Topbar from './topbar.jsx';
import Sidebar from './sidebar.jsx';
import BodyWindow from './window.jsx';

export const TicketContext = createContext();

function App(props) {
  const [tickets, setTickets] = useState([])
  const [agents, setAgents] = useState([])
  const [contacts, setContacts] = useState([])


  const url = 'http://localhost:5500';
  
  const getTickets = () => {
    fetch(`${url}/tickets`)
    .then((res) => res.json())
    .then(res => {
      setTickets(res.result)
    })
  }

  const getAgents = () => {
    fetch(`${url}/agents`)
    .then((res) => res.json())
    .then(res => {
      setAgents(res.result)
    })
  }

  const getContacts = () => {
    fetch(`${url}/contacts`)
    .then((res) => res.json())
    .then((res) => {
      setContacts(res.result);
    })
  }

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const agentData = [{
    _id: '1',
    name: 'Sam',
    email: 'agent@mail.com',
    role: 'agent',
    type: 'full-time'
  },
  {
    _id: '2',
    name: 'jelly',
    email: 'agent@mail.com',
    role: 'agent',
    type: 'Occational'
  },
  {
    _id: '3',
    name: 'John',
    email: 'killbill@mail.com',
    role: 'agent',
    type: 'full-time'
  }]

  const contactsData = [{
    _id: '1',
    name: 'contact-1',
    email: 'contact@mail.com'
  },{
    _id: '2',
    name: 'contact-2',
    email: 'contact2@mail.com'
  }]

  const ticketData = [{
    _id: '1',
    contact: '1',
    subject: 'can you show me how to use a pen with safety pin?',
    type: 'order',
    status: 'open',
    priority: 'medium',
    agent: '1',
    created_at: 'jan 1 2020',
    description: 'this is a description. This description describes everything which is more conserned and doable'
  },
  {
    _id: '2',
    contact: '2',
    subject: 'How the sales chart is plotted?',
    type: 'order',
    status: 'closed',
    priority: 'urgent',
    agent: '2',
    created_at: 'jan 1 2020',
    description: 'this is a description. This description describes everything which is more conserned and doable'
  }]

  useEffect(() => {
    getContacts();
    getAgents();
    if (agents && contacts){
      getTickets();
    }
    // setTickets(ticketData);
    // setAgents(agentData);
    // setContacts(contactsData);
  }, [])

  return (
    <div>
      <Topbar />
      <Sidebar />
      <div className='text-center m-2'>
        <h2>{capitalizeFirstLetter(props.page)}</h2>
      </div>
      <div className='mainContent'>
        <TicketContext.Provider value={{ticketValue: [tickets, setTickets], contactValue: [contacts, setContacts], agentValue: [agents, setAgents]}}>
          <BodyWindow agents = {agentData} ticket={ticketData} contact={contactsData} page={props.page} />
        </TicketContext.Provider>
      </div>
    </div>
  );
}

export default App;
