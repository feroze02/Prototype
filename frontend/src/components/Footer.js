// Reference
// https://reactjs.org/
// https://www.npmjs.com/package/react-bootstrap

import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className='text-center py-3'>
                        Copyright &copy; EShop
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer