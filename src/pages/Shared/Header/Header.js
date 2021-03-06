import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import './Header.css'
import logo from '../../../images/Logo.png'
import { NavLink } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const Header = ({ children }) => {
    const { user, logOut } = useFirebase()
    return (

        <Navbar className={children} expand="lg">
            <Container>
                <Navbar.Brand as={NavLink} to="/destinationsHome" className="text-white" ><img height="50px" src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle className="border-0 bg-white bg-opacity-25" aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <div className="input-group w-50 rounded-3 mx-auto">

                        <button className="btn btn-outline-secondary bg-white border-end-0  border ms-5 bg-white bg-opacity-10" type="button">
                            <i className="fa fa-search text-white"></i>
                        </button>

                        <input className="form-control border-start-0 border  text-white bg-white bg-opacity-10" placeholder="Search Your Destinations..." type="search" />



                    </div>

                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className="text-white ms-2" href="#action1">News</Nav.Link>
                        <Nav.Link as={NavLink} to="/destinationsHome" className="text-white ms-2">Destination</Nav.Link>
                        <Nav.Link className="text-white ms-2" href="#action2">Blogs</Nav.Link>
                        <Nav.Link className="text-white ms-2" href="#action2">Contacts</Nav.Link>
                        {user && <span className="text-white ms-2 mt-2">{user.displayName}</span>}
                        {
                            user ? <Button onClick={() => logOut()} variant="warning px-4 ms-1" >Logout</Button> :
                                <Button as={NavLink} to="/loginSignup" variant="warning px-4 ms-2" >Login</Button>
                        }



                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;