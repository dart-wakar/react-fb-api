import React from 'react';
import PropTypes from 'prop-types';

import initializeFb from './utils/initializeFb';

const className = 'fb-share-button';

const propTypes = {
    appId: PropTypes.string.isRequired,
    apiVersion: PropTypes.string.isRequired,
    urL: PropTypes.string,
    layout: PropTypes.oneOf(['icon_link','box_count','button_count','button']),
    size: PropTypes.oneOf(['small','large'])
};

const defaultProps = {
    appId: null,
    apiVersion: null,
    urL: null,
    layout: 'icon_link',
    size: 'small'
};

export default class FbShare extends React.Component {

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
                    data-layout={this.props.layout}
                    data-size={this.props.size}>
                </div>
            )
        }
        return (
            <div>Loading...</div>
        );
    }
}

FbShare.propTypes = propTypes;
FbShare.defaultProps = defaultProps;