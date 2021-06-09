import React from 'react';
import {Helmet} from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import Header from '.././components/Header';
import Button from '@material-ui/core/Button';
import './LandingPage.scss';

const LandingPage = () => {
    return (
        <Container id="LandingPage--Container">
            <Helmet>
                <title>Chrispotify - Hello!</title>
            </Helmet>
            <Header />
            <Row>
                <Col xs={12}>
                    <h2>Hello!</h2>
                    <p>Welcome to Chrispotify, a modern JS solution to implicit grant authorization.</p>
                    <Button color='primary' variant='contained' disableElevation>
                        Authorize Spotify
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default LandingPage;
