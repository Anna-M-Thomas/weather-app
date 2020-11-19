import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

function Header(){
    return (     <Navbar variant="light" bg="info" className="text-center">
                    <Navbar.Brand>How's the Weather?</Navbar.Brand>
                </Navbar>);
}

export default Header