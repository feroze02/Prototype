// Reference
// https://reactjs.org/
// https://www.npmjs.com/package/react-bootstrap


import React from 'react';
import { Row, Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'

const ContactScreen = () => {
    return (
        <FormContainer>
          <h1>Contact</h1>
          <Row className='py-1'>
            <Col>
              <h2>Location:</h2>
              <p>Tower Hamlets, London, UK</p>
            </Col>
          </Row>
          <Row className='py-1'>
            <Col>
            <h2>Email:</h2>
              <p>contact@example.com</p>
            </Col>
          </Row>
          <Row className='py-1'>
            <Col>
            <h2>Call:</h2>
              <p>+1234567890</p>
            </Col>
          </Row>
        </FormContainer>
      )
}

export default ContactScreen
