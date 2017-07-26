import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router';
import initializeFb from './utils/initializeFb';
import setLoginOptions from './utils/setLoginOptions';

const propTypes = {
    appId: PropTypes.string.isRequired,
    apiVersion: PropTypes.string.isRequired,
    onLoginSuccessful: PropTypes.func.isRequired,
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
        this.getUserProfile = this.getUserProfile.bind(this);
    }

    componentDidMount() {
        this.loginOptions = setLoginOptions(this.props);
        initializeFb(this,this.props.appId,this.props.apiVersion);
    }

    handleClick() {
        console.log('login attempt');
        var x = this;
        this.fb.login(function(response) {
            if(response.authResponse) {
                console.log(response);
                x.setState({loggedIn: true});
                x.getUserProfile();
                x.props.onLoginSuccessful(response);
            } else {
                console.log('nono');
            }
        },this.loginOptions);
    }

    getUserProfile() {
        this.fb.api('/me',function(response) {
            console.log(response);
        });
    }

    render() {
        if(this.state.loggedIn === true) {
            return <Redirect push to='/home'/>;
        }
        if(this.state.fbInitialized === true) {
            console.log(this.fb);
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