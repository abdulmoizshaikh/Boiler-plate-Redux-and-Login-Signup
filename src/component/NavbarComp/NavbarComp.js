import React, { Component } from 'react';
import '../CustomCss/NavbarComp.css';

class Navbar extends Component {

    render() {
        return (
            <div className="topnav">
                <a className="active" href="#home">Home</a>
                <a href="#news" className="right">Logout</a>
                <a href="#contact" className="right">Contact</a>
                <a href="#about" className="right">About</a>
            </div>
        )
    }

}
export default Navbar;

