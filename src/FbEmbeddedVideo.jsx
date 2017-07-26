import React from 'react';
import PropTypes from 'prop-types';

import initializeFb from './utils/initializeFb';

const className = 'fb-video';

const propTypes = {
    appId: PropTypes.string.isRequired,
    apiVersion: PropTypes.string.isRequired,
    urL: PropTypes.string.isRequired,
    allowFullScreen: PropTypes.bool,
    autoplay: PropTypes.bool,
    width: PropTypes.any,
    showText: PropTypes.bool,
    showCaptions: PropTypes.bool
};

const defaultProps = {
    appId: null,
    apiVersion: null,
    urL: null,
    allowFullScreen: false,
    autoplay: false,
    width: null,
    showText: false,
    showCaptions: false
};

export default class FbEmbeddedVideo extends React.Component {

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
                    data-allowfullscreen={this.props.allowFullScreen}
                    data-autoplay={this.props.autoplay}
                    data-width={this.props.width}
                    data-show-text={this.props.showText}
                    data-show-captions={this.props.showCaptions}>
                </div>
            );
        }
        return (
            <div>Loading...</div>
        );
    }
}

FbEmbeddedVideo.propTypes = propTypes;
FbEmbeddedVideo.defaultProps = defaultProps;