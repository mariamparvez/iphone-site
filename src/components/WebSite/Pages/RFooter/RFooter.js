import React from 'react';
import './RFooter.css'
import { Container, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function RFooter() {
    return (
        <main>
            
        <Dropdown id='r-footer'>
            <Dropdown.Toggle id='r-btn'>
            Company
            </Dropdown.Toggle>
        
            <Dropdown.Menu>
                
            <Dropdown.Item as={Link} id='r-option' to='/'></Dropdown.Item>
            <Dropdown.Item as={Link} id='r-option' to='/about'></Dropdown.Item>
            <Dropdown.Item as={Link} id='r-option' to='/'></Dropdown.Item>
            <Dropdown.Item as={Link} id='r-option' to='/about'></Dropdown.Item>
            <Dropdown.Item as={Link} id='r-option' to='/'></Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        <Dropdown id='r-footer'>
            <Dropdown.Toggle id='r-btn'>
            
            </Dropdown.Toggle>
        
            <Dropdown.Menu>
                
            <Dropdown.Item as={Link} id='r-option' to='/'></Dropdown.Item>
            <Dropdown.Item as={Link} id='r-option' to='/about'></Dropdown.Item>
            <Dropdown.Item as={Link} id='r-option' to='/'></Dropdown.Item>
            <Dropdown.Item as={Link} id='r-option' to='/'></Dropdown.Item>
            <Dropdown.Item as={Link} id='r-option' to='/about'></Dropdown.Item>
            <Dropdown.Item as={Link} id='r-option' to='/'></Dropdown.Item>
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

<Container>
<select class="form-select" aria-label="Default select example">
  <option selected>Company</option>
  <option value="1">About Us</option>
  <option value="2">Our Services</option>
  <option value="3">How It Works</option>
  <option value="3">FAQs</option>
  <option value="3">Careers</option>
</select>

<select class="form-select" aria-label="Default select example">
  <option selected>For People</option>
  <option value="1">Language</option>
  <option value="2">Ayurvedic Doctors</option>
  <option value="3">Homeopathy Doctors</option>
  <option value="3">Book Lab Test</option>
  <option value="3">Help Centre</option>
</select>
</Container>
        
        

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
