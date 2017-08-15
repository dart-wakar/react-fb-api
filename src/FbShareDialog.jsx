import React from 'react';
import PropTypes from 'prop-types';

import initializeFb from './utils/initializeFb';

const method = 'share';

const propTypes = {
    appId: PropTypes.string.isRequired,
    apiVersion: PropTypes.string.isRequired,
    isNotChild: PropTypes.bool,
    urL: PropTypes.string,
    buttonText: PropTypes.string.isRequired,
    hashtag: PropTypes.string,
    quote: PropTypes.string,
    handleResponse: PropTypes.func
};

const defaultProps = {
    appId: null,
    apiVersion: null,
    buttonText: null,
    isNotChild: true,
    urL: null,
    hashtag: null,
    quote: null,
    handleResponse() {}
};

export default class FbShareDialog extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            fbInitialized: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        if(this.props.isNotChild) {
            initializeFb(this,this.props.appId,this.props.apiVersion);
            this.setState({fbInitialized: true});
        }
        this.fb = window.FB;
    }

    handleClick() {
        var x = this;
        this.fb.ui({
            method: method,
            href: this.props.urL,
            hashtag: this.props.hashtag,
            quote: this.props.quote
        },function(response) {
            x.props.handleResponse(response);
        });
    }

    render() {
        if((this.props.isNotChild === false) || this.state.fbInitialized) {
            return (
                <button onClick={this.handleClick}>{this.props.buttonText}</button>
            )
        }
        return (
            <div>Loading...</div>
        )
    }
}

FbShareDialog.propTypes = propTypes;
FbShareDialog.defaultProps = defaultProps;