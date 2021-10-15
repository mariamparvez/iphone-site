import React from 'react';
import './RFooter.css'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function RFooter() {
    return (
        <main>

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

<select class="form-select" aria-label="Default select example">
<option selected>For Business</option>
  <option selected>Doctor’s Profile</option>
  <option value="1">Pharmacies</option>
  <option value="2">Diagnostic Labs</option>
  <option value="3">Hospitals</option>\
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
