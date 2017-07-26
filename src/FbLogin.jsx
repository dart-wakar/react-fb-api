import React from 'react';
import PropTypes from 'prop-types';
import initializeFb from './utils/initializeFb';
import setLoginOptions from './utils/setLoginOptions';

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
        this.loginOptions = setLoginOptions(this.props);
        initializeFb(this,this.props.appId,this.props.apiVersion);
    }

    handleClick() {
        console.log('login attempt');
        var x = this;
        this.fb.login(function(response) {
            if(response.authResponse) {
                console.log(response);
                x.setState({login: true});
                x.props.onLoginSuccessful(response);
            } else {
                console.log('nono');
            }
        },this.loginOptions);
    }

    render() {
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