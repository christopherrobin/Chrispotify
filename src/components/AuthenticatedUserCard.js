import React from 'react';
import { Container, Row, Col } from 'reactstrap';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';

const AuthenticatedUserCard = (props) => {
    const { UserInfo } = props;
    console.table(UserInfo);
    return (
        <div>
            <h2>Hello, {UserInfo.display_name}!</h2>
        </div>

    );
};

export default AuthenticatedUserCard;