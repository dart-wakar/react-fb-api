import React from 'react';
import PropTypes from 'prop-types';

import initializeFb from './utils/initializeFb';

const className = 'fb-quote';

const propTypes = {
    appId: PropTypes.string.isRequired,
    apiVersion: PropTypes.string.isRequired,
    urL: PropTypes.string,
    layout: PropTypes.oneOf(['quote','button'])
};

const defaultProps = {
    appId: null,
    apiVersion: null,
    urL: null,
    layout: 'quote'
};

export default class FbQuote extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fbInitialized: false
        };
    }

    componentDidMount() {
        initializeFb(this,this.props.appId,this.props.apiVersion);
        this.fb = window.FB;
        if(this.fb) {
            this.setState({fbInitialized: true});
        }
    }

    render() {
        if(this.state.fbInitialized) {
            return (
                <div className={className}
                    data-href={this.props.urL}
                    data-layout={this.props.layout}>
                </div>
            );
        }
        return (
            <div>Loading...</div>
        );
    }
}

FbQuote.propTypes = propTypes;
FbQuote.defaultProps = defaultProps;