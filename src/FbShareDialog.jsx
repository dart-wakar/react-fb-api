import React from 'react';

import initializeFb from './utils/initializeFb';

const method = 'share';

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
        this.fb.ui({
            method: method,
            href: this.props.urL
        },function(response) {
            console.log(response);
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