import React from 'react';

const TicketIcon = (props) => {
    return (
        <div className='ticket-icon-cont m-2'>
            <span className='icon-title'>{props.title}</span>
        </div>
    );
}


export default TicketIcon;