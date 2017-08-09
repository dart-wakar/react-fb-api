import React from 'react';
import PropTypes from 'prop-types';

import FbComments from './FbComments';

import initializeFb from './utils/initializeFb';

const propTypes = {
    appId: PropTypes.string.isRequired,
    apiVersion: PropTypes.string.isRequired,
    urL: PropTypes.string,
    onFinishedRendering: PropTypes.func,
    onCommentCreate: PropTypes.func,
    onCommentRemove: PropTypes.func,
    isNotChild: PropTypes.bool
};

const defaultProps = {
    appId: null,
    apiVersion: null,
    urL: null,
    onFinishedRendering() {},
    onCommentCreate() {},
    onCommentRemove() {},
    isNotChild: true
};

export default class FbInteractiveComments extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fbInitialized: false
        }
        this.finishedRendering = this.finishedRendering.bind(this);
        this.commentCreate = this.commentCreate.bind(this);
        this.commentRemove = this.commentRemove.bind(this);
    }

    componentDidMount() {
        initializeFb(this,this.props.appId,this.props.apiVersion);
    }

    finishedRendering() {
        this.props.onFinishedRendering();
    }

    commentCreate(response) {
        this.props.onCommentCreate(response);
    }

    commentRemove(response) {
        this.props.onCommentRemove(response);
    }

    render() {
        if(this.state.fbInitialized) {
            this.fb.Event.subscribe('xfbml.render',this.finishedRendering);
            this.fb.Event.subscribe('comment.create',this.commentCreate);
            this.fb.Event.subscribe('comment.remove',this.commentRemove);
            return (
                <FbComments appId={this.props.appId} apiVersion={this.props.apiVersion} urL={this.props.urL} isNotChild={false}/>
            );
        }
        return (
            <div>Loading...</div>
        );
    }

}

FbInteractiveComments.propTypes = propTypes;
FbInteractiveComments.defaultProps = defaultProps;