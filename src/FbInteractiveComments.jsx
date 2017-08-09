import React from 'react';
//import PropTypes from 'prop-types';

import FbComments from './FbComments';

import initializeFb from './utils/initializeFb';

export default class FbInteractiveComments extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fbInitialized: false
        }
        this.finished_rendering = this.finished_rendering.bind(this);
    }

    componentDidMount() {
        initializeFb(this,this.props.appId,this.props.apiVersion);
        
    }

    finished_rendering() {
        console.log('finished_rendering');
    }

    render() {
        if(this.state.fbInitialized) {
            this.fb.Event.subscribe('xfbml.render',this.finished_rendering);
            return (
                <FbComments appId={this.props.appId} apiVersion={this.props.apiVersion} urL={this.props.urL} isNotChild={false}/>
            );
        }
        return (
            <div>Loading...</div>
        );
    }

}