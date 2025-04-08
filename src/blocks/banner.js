import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Banner.css'; // custom styles
import { Link } from '@mui/material';

const Banner = () => {
  return (
    <div className="banner-bg py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Side */}
          <Col md={6} className="mb-4 mb-md-0 text-white">
            <h1 className="fw-bold mb-4">
              Best place to buy and sell your business
            </h1>
            <div className="d-flex gap-3 flex-wrap align-items-center">
              <Button  href="index223.html" variant="light" className="fw-bold">
                
                Buy Business</Button>
              <Button href="index2323.html" variant="light" className="fw-bold">
                
               Sell Business</Button>
            </div>
          </Col>

          {/* Right Side */}
          <Col md={6}>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              {[
                'https://via.placeholder.com/150x100?text=Business+1',
                'https://via.placeholder.com/150x100?text=Business+2',
                'https://via.placeholder.com/150x100?text=Business+3'
              ].map((img, idx) => (
                <div key={idx} className="position-relative banner-image">
                  <img
                    src={img}
                    alt="Business"
                    className="img-fluid rounded"
                    style={{ maxHeight: '150px', width: 'auto' }}
                  />
                  <div className="sold-overlay">SOLD</div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
