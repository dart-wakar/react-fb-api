import React from 'react';
import PropTypes from 'prop-types';

import initializeFb from './utils/initializeFb';

const className = 'fb-comment-embed';

const propTypes = {
    appId: PropTypes.string.isRequired,
    apiVersion: PropTypes.string.isRequired,
    urL: PropTypes.string.isRequired,
    width: PropTypes.any,
    includeParent: PropTypes.bool
};

const defaultProps = {
    appId: null,
    apiVersion: null,
    urL: null,
    width: null,
    includeParent: false
};

export default class FbEmbeddedComments extends React.Component {

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
                    data-width={this.props.width}
                    data-include-parent={this.props.includeParent}>
                </div>
            );
        }
        return (
            <div>Loading...</div>
        );
    }
}

FbEmbeddedComments.propTypes = propTypes;
FbEmbeddedComments.defaultProps = defaultProps;