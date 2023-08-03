import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { propTypes } from 'react-bootstrap/esm/Image';
import PropTypes from 'prop-types';

function BasicExample(props) {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">{props.mainheading}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">{props.subheading}</Nav.Link>
                        <Nav.Link href="#link">{props.subheadingtwo}</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
//   BasicExample.defaultProps ={
//     mainheading:'dEFAULT PROPS',
//     subheading:'dEFAULT PROPS',
//     subheadingtwo:'dEFAULT PROPS'
//   }
BasicExample.propTypes = {
    mainheading: PropTypes.string.isRequired,
    subheading: PropTypes.string.isRequired,
    subheadingtwo: PropTypes.string.isRequired
}

export default BasicExample;