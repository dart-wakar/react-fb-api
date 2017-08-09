import React from 'react';
import PropTypes from 'prop-types';

import FbLike from './FbLike';

import initilaizeFb from './utils/initializeFb';

const propTypes = {
    appId: PropTypes.string.isRequired,
    apiVersion: PropTypes.string.isRequired,
    urL: PropTypes.string,
    onFinishedRendering: PropTypes.func,
    onLikeSuccessful: PropTypes.func,
    onUnlikeSuccessful: PropTypes.func,
    isNotChild: PropTypes.bool
};

const defaultProps = {
    appId: null,
    apiVersion: null,
    urL: null,
    onFinishedRendering() {},
    onLikeSuccessful() {},
    onUnlikeSuccessful() {},
    isNotChild: true
};

export default class FbInteractiveLike extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fbInitialized: false
        }
        this.finishedRendering = this.finishedRendering.bind(this);
        this.onLikeCallback = this.onLikeCallback.bind(this);
        this.onUnlikeCallback = this.onUnlikeCallback.bind(this);
    }

    componentDidMount() {
        initilaizeFb(this,this.props.appId,this.props.apiVersion);
    }

    finishedRendering() {
        this.props.onFinishedRendering();
    }

    onLikeCallback(uRL,htmlElement) {
        this.props.onLikeSuccessful(uRL,htmlElement);
    }

    onUnlikeCallback(uRL,htmlElement) {
        this.props.onUnlikeSuccessful(uRL,htmlElement);
    }

    render() {
        if(this.state.fbInitialized) {
            this.fb.Event.subscribe('xfbml.render',this.finishedRendering);
            this.fb.Event.subscribe('edge.create',this.onLikeCallback);
            this.fb.Event.subscribe('edge.remove',this.onUnlikeCallback);
            return (
                <FbLike appId={this.props.appId} apiVersion={this.props.apiVersion} urL={this.props.urL} isNotChild={false}/>
            );
        }
        return (
            <div>Loading...</div>
        );
    }
}

FbInteractiveLike.propTypes = propTypes;
FbInteractiveLike.defaultProps = defaultProps;