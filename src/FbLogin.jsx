import React from 'react';
import {Redirect} from 'react-router';
import initializeFb from './utils/initializeFb';

export default class FbLogin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            fbInitialized: false
        }
        
        initializeFb(this);
        /*window.fbAsyncInit = function() {
            FB.init({
                appId            : '300039560455517',
                autoLogAppEvents : true,
                xfbml            : true,
                version          : 'v2.9'
            });
            FB.AppEvents.logPageView();
            x.fb = FB;
            console.log(x);
            console.log(typeof x.fb);
        };

        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                console.log('stop');
                return;
            }
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));*/
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        
    }

    handleClick() {
        console.log('login attempt');
        //this.setState({login: true});
        console.log(typeof this.fb);
        
        this.fb.login(function(response) {
            if(response.authResponse) {
                console.log('Welcome');
            } else {
                console.log('nono');
            }
        },{scope: 'email,public_profile'})
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