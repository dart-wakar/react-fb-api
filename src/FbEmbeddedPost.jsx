import React from 'react';
import PropTypes from 'prop-types';

import initializeFb from './utils/initializeFb';

const className = 'fb-post';

const propTypes = {
    appId: PropTypes.string.isRequired,
    apiVersion: PropTypes.string.isRequired,
    urL: PropTypes.string.isRequired,
    width: PropTypes.any,
    showText: PropTypes.bool
};

const defaultProps = {
    appId: null,
    apiVersion: null,
    urL: null,
    width: null,
    showText: false
};

export default class FbEmbeddedPost extends React.Component {
    
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
                    data-show-text={this.props.showText}>
                </div>
            );
        }
        return (
            <div>Loading...</div>
        );
    }
}

FbEmbeddedPost.propTypes = propTypes;
FbEmbeddedPost.defaultProps = defaultProps;