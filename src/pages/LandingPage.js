import React, { useEffect, useState } from 'react';
import {Helmet} from 'react-helmet';
import { get } from 'lodash';
import { fetchIt } from '.././FetchUtils';
import { Container, Row, Col } from 'reactstrap';
import Header from '.././components/Header';
import AuthenticatedUserCard from '.././components/AuthenticatedUserCard';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './LandingPage.scss';

// Spotify specific functions
import { authorizeUser, getHashParams} from './../SpotifyUtils.js';

const LandingPage = () => {
    const [UserInfo, setUserInfo] = useState({});
    const params = getHashParams();
    const accessToken = get(params, 'access_token', false);

    useEffect(() => {
    fetchIt('https://api.spotify.com/v1/me', accessToken)
        .then((result) => {
            setUserInfo(result);
        });
    }, []);

    // console.log(UserInfo);
    // console.log(accessToken);

    return (
        <Container id="LandingPage--Container">
            <Helmet>
                <title>Chrispotify - Hello!</title>
            </Helmet>
            <Header />
            <Row>
                <Col xs={12}>
                    <Card variant='outlined'>
                        <CardContent>
                            <Choose>
                                <When condition={accessToken}>
                                    <AuthenticatedUserCard UserInfo={UserInfo}/>
                                </When>
                                {//<When condition={SpotifyAuthError}></When>
                                }
                                <Otherwise>
                                <h2>Hello!</h2>
                                <p>Welcome to Chrispotify, a modern JS solution to implicit grant authorization.</p>
                                    <Button
                                        onClick={() => authorizeUser()}
                                        color='primary'
                                        variant='contained'
                                        disableElevation
                                        fullWidth
                                    >
                                        Authorize Spotify
                                    </Button>
                                </Otherwise>
                            </Choose>
                        </CardContent>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default LandingPage;
