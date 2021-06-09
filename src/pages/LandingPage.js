import React from 'react';
import {Helmet} from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import Header from '.././components/Header';
import './LandingPage.scss';

const LandingPage = () => {
    return (
        <Container id="LandingPage--Container">
            <Helmet>
                <title>React-Starter-Pack - LandingPage</title>
            </Helmet>
            <Header />
            <Row>
                <Col xs={12}>
                    <h2>Hello!</h2>
                    <p>This is my custom React Starter Pack, a constantly evolving collection of my favorite tools ready to be used to jump-start a new project.</p>
                    <p>This project initializes with 2 pages and a minimalist react-router-dom navigational example.</p>
                    <p>Other features include:</p>
                    <ul>
                        <li>Custom fetch and cookie management utility functions</li>
                        <li>ESLint configuration</li>
                        <li>Babel configuration (without ejecting)<ul><li>jsx-control-statements</li></ul></li>
                        <li>Material-UI core, lab, and icons</li>
                        <li>SASS</li>
                        <li>Jest</li>
                        <li>Lodash</li>
                        <li>React-Helmet</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default LandingPage;
