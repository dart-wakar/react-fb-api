import React from 'react';
import PropTypes from 'prop-types';

import initializeFb from './utils/initializeFb';

const method = 'feed';

const propTypes = {
    appId: PropTypes.string.isRequired,
    apiVersion: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    from: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    to: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    source: PropTypes.string
};

const defaultProps = {
    appId: null,
    apiVersion: null,
    buttonText: null,
    from: null,
    to: null,
    source: null
};

export default class FbFeedDialog extends React.Component {

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
            from: this.props.from,
            to: this.props.to,
            link: this.props.link,
            source: this.props.source,
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

FbFeedDialog.propTypes = propTypes;
FbFeedDialog.defaultProps = defaultProps;