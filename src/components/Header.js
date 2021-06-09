import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = ({pageTitle}) => {
    return (
        <Container id='Header--Container'>
            <Row>
                <Col xs={12}>
                    <h1>React-Starter-Pack</h1>
                    <div>
                        Fork it on <a href='https://github.com/christopherrobin/React-Starter-Pack' target='_blank' rel="no-referrer noreferrer">GitHub</a>
                    </div>
                    <h2>{pageTitle}</h2>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/examples">Examples</Link></li>
                    </ul>
                    <hr />
                </Col>
            </Row>
        </Container>
    );
};

export default Header;
