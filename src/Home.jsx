import React from 'react';
//import initializeFb from './utils/initializeFb';
import FbLike from './FbLike';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fbInitialized: false
        }
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.fb.api('/me',function(response) {
            console.log(response);
        });
    }

    componentDidMount() {
        this.fb = window.FB;
        this.setState({fbInitialized: true});
    }

    render() {
        if(this.state.fbInitialized === true) {
            return (
                <div>
                    <h1>Home</h1>
                    <FbLike />
                </div>
            );
        }
        return (
            <div>Loading...</div>
        )
    }
}