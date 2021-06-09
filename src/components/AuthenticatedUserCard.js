import React from 'react';
import { isString, get, map } from 'lodash';
import { Container, Row, Col } from 'reactstrap';

const AuthenticatedUserCard = (props) => {
    const { UserInfo } = props;
    const userAvatar = get(UserInfo, 'images[0].url', '');
    return (
        <Container>
            <Row>
                <Col xs={12}>
                    <img style={{ border: '1px solid #666', marginBottom: '1em' }} src={userAvatar} alt='User Avatar from Spotify' />
                    <h2>Hello, {UserInfo.display_name}!</h2></Col>
                <Col xs={12}>
                    <ul>
                        {
                            map(UserInfo, (value, key) =>  {
                                if (isString(value)){
                                    return <li key={key}><span className='key'>{key}:</span> {value}</li>;
                                };
                            })
                        }
                    </ul>
                </Col>
            </Row>
        </Container>

    );
};

export default AuthenticatedUserCard;
