import React from 'react';
import PropTypes from 'prop-types';

import initializeFb from './utils/initializeFb';

const className = 'fb-send';

const propTypes = {
    appId: PropTypes.string.isRequired,
    apiVersion: PropTypes.string.isRequired,
    colorScheme: PropTypes.oneOf(['light','dark']),
    urL: PropTypes.string,
    kidDirectedSite: PropTypes.bool,
    reference: PropTypes.string,
    size: PropTypes.oneOf(['small'])
};

const defaultProps = {
    appId: null,
    apiVersion: null,
    urL: null,
    colorScheme: 'light',
    kidDirectedSite: false,
    reference: null,
    size: 'small'
};

export default class FbSend extends React.Component {

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
                    data-kid-directed-site={this.props.kidDirectedSite}
                    data-ref={this.props.reference}
                    data-size={this.props.size}>
                </div>
            );
        }
        return (
            <div>Loading...</div>
        );
    }
}

FbSend.propTypes = propTypes;
FbSend.defaultProps = defaultProps;