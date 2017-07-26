import React from 'react';
import PropTypes from 'prop-types';

import initializeFb from './utils/initializeFb';

const className = 'fb-save';

const propTypes = {
    appId: PropTypes.string.isRequired,
    apiVersion: PropTypes.string.isRequired,
    urI: PropTypes.string
};

const defaultProps = {
    appId: null,
    apiVersion: null,
    urI: null
};

export default class FbSave extends React.Component {

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
                    data-uri={this.props.urI}>
                </div>
            );
        }
        return (
            <div>Loading...</div>
        );
    }
}

FbSave.propTypes = propTypes;
FbSave.defaultProps = defaultProps;