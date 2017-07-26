import React from 'react';
import PropTypes from 'prop-types';

import initializeFb from './utils/initializeFb';

const className = 'fb-follow';

const propTypes = {
    appId: PropTypes.string.isRequired,
    apiVersion: PropTypes.string.isRequired,
    urL: PropTypes.string,
    colorScheme: PropTypes.oneOf(['light','dark']),
    kidDirectedSite: PropTypes.bool,
    layout: PropTypes.oneOf(['standard','button_count','box_count']),
    showFaces: PropTypes.bool,
    size: PropTypes.oneOf(['small','large'])
};

const defaultProps = {
    appId: null,
    apiVersion: null,
    urL: null,
    colorScheme: 'light',
    kidDirectedSite: false,
    layout: 'standard',
    showFaces: false,
    size: 'small'
};

export default class FbFollow extends React.Component {

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
                    data-layout={this.props.layout}
                    data-show-faces={this.props.showFaces}
                    data-size={this.props.size}>
                </div>
            );
        }
        return (
            <div>Loading...</div>
        );
    }
}

FbFollow.propTypes = propTypes;
FbFollow.defaultProps = defaultProps;