import React from 'react';

import FbLike from './FbLike';

import initilaizeFb from './utils/initializeFb';

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
        console.log('finished rendering');
        this.props.onFinishedRendering();
    }

    onLikeCallback(uRL,htmlElement) {
        console.log(uRL);
        console.log(htmlElement);
        this.props.onLikeSuccessful(uRL,htmlElement);
    }

    onUnlikeCallback(uRL,htmlElement) {
        console.log(uRL);
        console.log(htmlElement);
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