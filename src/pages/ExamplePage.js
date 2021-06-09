import React, { useEffect, useState } from 'react';
import {Helmet} from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardContent } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { get } from '.././FetchUtils';
import { map } from 'lodash';
import Header from '.././components/Header';
import './ExamplePage.scss';

const getEx =
`get(url)
    .then((result) => {
        console.log(result)
    });
`;

const getCode =
`
import { map } from 'lodash';
import { get } from '.././FetchUtils';

...

// Fetch data in useEffect
get('https://cat-fact.herokuapp.com/facts')
    .then((result) => {
        // Use State Hook
        setCatFacts(result);
    });

...

map(CatFacts, (catFact) => <li key={catFact._id}>{catFact.text}</li>)

`;

const ExamplePage = () => {

    const [CatFacts, setCatFacts] = useState({});

    useEffect(() => {
        get('https://cat-fact.herokuapp.com/facts')
            .then((result) => {
                setCatFacts(result);
            });
    }, []);

    return (
        <Container id="ExamplePage--Container">
            <Helmet>
                <title>React-Starter-Pack - ExamplePage</title>
            </Helmet>
            <Header/>
            <Row>
                <Col xs={12}>
                    <h1>Examples</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <Card variant='outlined' className='Card'>
                        <CardContent>
                            <h3>Set Cookie</h3>
                            <div>CookieUtils.setCookie()</div>
                            <div>Args: <code>name</code>, <code>value</code></div>
                            <div><pre><code>setCookie('cookie-name', 'cookie-value');</code></pre></div>
                        </CardContent>
                    </Card>
                </Col>
                <Col xs={12} md={6}>
                    <Card variant='outlined' className='Card'>
                        <CardContent>
                            <h3>Get Cookie</h3>
                            <div>CookieUtils.getCookie()</div>
                            <div>Args: <code>name</code></div>
                            <div><pre><code>getCookie('cookie-name');</code></pre></div>
                        </CardContent>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <Card variant='outlined' className='Card'>
                        <CardContent>
                            <h3>Delete Cookie</h3>
                            <div>CookieUtils.setCookie()</div>
                            <div>Args: <code>name</code>, <code>path</code></div>
                            <div><pre><code>deleteCookie('cookie-name', '/');</code></pre></div>
                        </CardContent>
                    </Card>
                </Col>
                <Col xs={12} md={6}>
                    <Card variant='outlined' className='Card'>
                        <CardContent>
                            <h3>GET (Fetch)</h3>
                            <div>FetchUtils.get()</div>
                            <div>Args: <code>url</code></div>
                            <div><pre><code>
                            {getEx}
                            </code></pre></div>
                        </CardContent>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Card variant='outlined' className='Card'>
                        <CardContent>
                            <h3>Fetch Example</h3>
                            <p>The following cat facts are pulled from the <a href='https://cat-fact.herokuapp.com/' target='_blank' rel="no-referrer noreferrer">Cat Facts API</a> and entries are iterated through to render each fact to a list-item using the <code>get</code> function in <a href='https://github.com/christopherrobin/React-Starter-Pack/blob/main/src/FetchUtils.js' target='_blank' rel="no-referrer noreferrer">FetchUtils.js</a></p>
                            <Choose>
                                <When condition={ CatFacts === undefined }>
                                    <Alert style={{ marginBottom: '1em' }} severity="error">There was an error retrieving facts about cats.</Alert>
                                </When>
                                <Otherwise>
                                    <ul>
                                        {
                                            map(CatFacts, (catFact) => <li key={catFact._id}>{catFact.text}</li>)
                                        }
                                    </ul>
                                </Otherwise>
                            </Choose>
                            <hr />
                            <h3>Implementation</h3>
                            <code><pre>{getCode}</pre></code>
                        </CardContent>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ExamplePage;
