import React from 'react';
import {Redirect} from 'react-router';
import PropTypes from 'prop-types';
import initializeFb from './utils/initializeFb';

const propTypes = {
    appId: PropTypes.string.isRequired,
    apiVersion: PropTypes.string.isRequired,
    authType: PropTypes.oneOf(['rerequest']),
    scope: PropTypes.string,
    returnScopes: PropTypes.bool,
    enableProfileSelector: PropTypes.bool,
    profileSelectorIds: PropTypes.string
}

export default class FbLogin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            fbInitialized: false
        }       
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        initializeFb(this,this.props.appId,this.props.apiVersion);
    }

    handleClick() {
        console.log('login attempt');
        //this.setState({login: true});
        console.log(typeof this.fb);
        var x = this;
        this.fb.login(function(response) {
            if(response.authResponse) {
                console.log('Welcome');
                x.setState({login: true});
            } else {
                console.log('nono');
            }
        });
    }

    render() {
        if(this.state.login === true) {
            return <Redirect push to="/home" />;
        }
        if(this.state.fbInitialized === true) {
            return(
                <button onClick={this.handleClick}>Login with Facebook</button>
            );
        }
        return (
            <div>Loading...</div>
        );
    }
}

FbLogin.propTypes = propTypes;