import React from 'react';
import PropTypes from 'prop-types';

import initializeFb from './utils/initializeFb';

const className = 'fb-page';

const propTypes = {
    appId: PropTypes.string.isRequired,
    apiVersion: PropTypes.string.isRequired,
    urL: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    tabs: PropTypes.string,
    hideCover: PropTypes.bool,
    showFacepile: PropTypes.bool,
    hideCta: PropTypes.bool,
    smallHeader: PropTypes.bool,
    adaptContainerWidth: PropTypes.bool
};

const defaultProps = {
    appId: null,
    apiVersion: null,
    urL: null,
    width: 340,
    height: 500,
    tabs: 'timeline',
    hideCover: false,
    showFacepile: true,
    hideCta: false,
    smallHeader: false,
    adaptContainerWidth: true
};

export default class FbPage extends React.Component {

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
                    data-width={this.props.width}
                    data-height={this.props.height}
                    data-tabs={this.props.tabs}
                    data-hide-cover={this.props.hideCover}
                    data-show-facepile={this.props.showFacepile}
                    data-hide-cta={this.props.hideCta}
                    data-small-header={this.props.smallHeader}
                    data-adapt-container-width={this.props.adaptContainerWidth}>
                </div>
            );
        }
        return (
            <div>Loading...</div>
        );
    }
}

FbPage.propTypes = propTypes;
FbPage.defaultProps = defaultProps;