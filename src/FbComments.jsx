import React from 'react';
import PropTypes from 'prop-types';

import initializeFb from './utils/initializeFb';

const className = 'fb-comments';

const propTypes = {
    appId: PropTypes.string.isRequired,
    apiVersion: PropTypes.string.isRequired,
    urL: PropTypes.string,
    colorScheme: PropTypes.oneOf(['light','dark']),
    numPosts: PropTypes.number,
    orderBy: PropTypes.oneOf(['social','reverse_time','time']),
    width: PropTypes.any
};

const defaultProps = {
    appId: null,
    apiVersion: null,
    urL: null,
    colorScheme: 'light',
    numPosts: 10,
    orderBy: 'social',
    width: 550
};

export default class FbComments extends React.Component {

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
                    data-colorscheme={this.props.colorScheme}
                    data-numposts={this.props.numPosts}
                    data-order-by={this.props.orderBy}
                    data-width={this.props.width}>
                </div>
            );
        }
        return (
            <div>Loading...</div>
        );
    }
}

FbComments.propTypes = propTypes;
FbComments.defaultProps = defaultProps;