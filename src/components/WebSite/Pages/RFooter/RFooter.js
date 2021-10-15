import React from 'react';
import './RFooter.css'
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function RFooter() {
    return (
        <main>
            
        <Dropdown id='r-footer'>
            <Dropdown.Toggle id='r-btn'>
            Company
            </Dropdown.Toggle>
        
            <Dropdown.Menu>
                
            <Dropdown.Item as={Link} id='r-option' to='/'>About Us</Dropdown.Item>
            <Dropdown.Item as={Link} id='r-option' to='/about'>Our Services</Dropdown.Item>
            <Dropdown.Item as={Link} id='r-option' to='/'>How It Works</Dropdown.Item>
            <Dropdown.Item as={Link} id='r-option' to='/about'>FAQs</Dropdown.Item>
            <Dropdown.Item as={Link} id='r-option' to='/'>Careers</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        <Dropdown id='r-footer'>
            <Dropdown.Toggle id='r-btn'>
            For People
            </Dropdown.Toggle>
        
            <Dropdown.Menu>
                
            <Dropdown.Item as={Link} id='r-option' to='/'>Language</Dropdown.Item>
            <Dropdown.Item as={Link} id='r-option' to='/about'>Speciality</Dropdown.Item>
            <Dropdown.Item as={Link} id='r-option' to='/'>Ayurvedic Doctors</Dropdown.Item>
            <Dropdown.Item as={Link} id='r-option' to='/'>Homeopathy Doctors</Dropdown.Item>
            <Dropdown.Item as={Link} id='r-option' to='/about'>Book Lab Test</Dropdown.Item>
            <Dropdown.Item as={Link} id='r-option' to='/'>Help Centre</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        <Dropdown id='r-footer'>
            <Dropdown.Toggle id='r-btn'>
            For Professionals
            </Dropdown.Toggle>
        
            <Dropdown.Menu>
                
            <Dropdown.Item as={Link} id='r-option' to='/'>Doctor’s Profile</Dropdown.Item>
            <Dropdown.Item as={Link} id='r-option' to='/about'>Pharmacies</Dropdown.Item>
            <Dropdown.Item as={Link} id='r-option' to='/'>Diagnostic Labs</Dropdown.Item>
            <Dropdown.Item as={Link} id='r-option' to='/'>Hospitals</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        <select name="footer-one" id="footer-one">
            <option value="one"></option>
            <option value="two"></option>
            <option value="three"></option>
            <option value="four"></option>
        </select>

        <div className="footer-bottom vanish-footer">
            <div className="container-fluid">
            
                <div className="copyright">
                    <div className="row">

                        <div className="col-md-6 col-lg-6">
                            <div className="copyright-text">
                                <p className="mb-0 text-center">&copy; 2021 Medatu. All rights reserved.</p>
                            </div>
                        </div>

                        

                    </div>
                </div>
                
            </div>
        </div>

        </main>
    )
}

export default RFooter
