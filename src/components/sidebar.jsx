import ticket from '../assets/images/email.png'
import agent from '../assets/images/live-chat.png'
import contacts from '../assets/images/identification.png'
import Button from './button'

const Sidebar = () => {
    return (
        <div className="sidenav">
            <Button link='/' src={ticket} title='Tickets' />
            <Button link='/agents' src={agent} title='Agents' />
            <Button link='/contacts' src={contacts} title='Contacts' />
        </div>
    );
}

export default Sidebar;