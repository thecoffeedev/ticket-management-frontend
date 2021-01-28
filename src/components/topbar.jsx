import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../assets/images/customer-support.png';
import profile from '../assets/images/profile.png';
import add from '../assets/images/plus-sign.png';
import { Dropdown } from 'react-bootstrap';

const Header = (props) => {
    return (
        <nav className="navbar navbar-dark navbar-fixed-top" style={{backgroundColor: '#243F59'}}>
            <a className="navbar-brand" href="/">
                <div className='bg-light mr-3 p-1 rounded' style={{width: 'fit-content', display: 'inline-block'}}>
                    <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" />
                </div>
                Ticket Management Company
            </a>
            <form className="form-inline my-2 my-lg-0">
                <Dropdown className='mr-2'>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <img src={add} alt='add' className='inv-icons mr-2' style={{width: '24px'}} />
                        New
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item><Link className='nav-links' to='/newTicket'>Ticket</Link></Dropdown.Item>
                        <Dropdown.Item><Link className='nav-links' to='/newAgent'>Agent</Link></Dropdown.Item>
                        <Dropdown.Item><Link className='nav-links' to='/newContact'>Contact</Link></Dropdown.Item>
                        {/* <Dropdown.Item href="#/action-2">Agent</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Contact</Dropdown.Item> */}
                    </Dropdown.Menu>
                </Dropdown>
                {/* <button class="btn btn-light my-2 my-sm-0" type="submit">Search</button> */}
                <input className="form-control mr-sm-2 m-1" type="search" placeholder="Search" aria-label="Search" />
                {/* <a className="btn btn-outline-secondary my-2 my-sm-0" href='kdljahlkjdh' /> */}
                <div className='bg-light mr-3 p-1 rounded m-1' style={{width: 'fit-content', display: 'inline-block', cursor: 'pointer'}}>
                    <img src={profile} width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" />
                </div>
            </form>
        </nav>
    );
}

export default Header;