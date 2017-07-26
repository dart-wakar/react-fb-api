import React from 'react';
import PropTypes from 'prop-types';

import initializeFb from './utils/initializeFb';

const classname = "fb-like";

const propTypes = {
    appId: PropTypes.string.isRequired,
    apiVersion: PropTypes.string.isRequired,
    urL: PropTypes.string,
    action: PropTypes.oneOf(['like','recommend']),
    layout: PropTypes.oneOf(['standard','box_count','button_count','button']),
    colorScheme: PropTypes.oneOf(['light','dark']),
    kidDirectedSite: PropTypes.bool,
    reference: PropTypes.string,
    share: PropTypes.bool,
    showFaces: PropTypes.bool,
    size: PropTypes.oneOf(['large','small'])
};

const defaultProps = {
    appId: null,
    apiVersion: null,
    urL: null,
    action: 'like',
    colorScheme: 'light',
    kidDirectedSite: false,
    layout: 'standard',
    reference: null,
    share: false,
    size: 'small',
    showFaces: true
};

export default class FbLike extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fbInitialized: false
        }
    }

    componentDidMount() {
        initializeFb(this,this.props.appId,this.props.apiVersion);
        this.fb = window.FB;
        if(this.fb) {
            this.setState({fbInitialized: true});
        }
    }

    render() {
        if (this.state.fbInitialized) {
            console.log(this.fb);
            return (
                <div className={classname}
                    data-href={this.props.urL}
                    data-layout={this.props.layout}
                    data-action={this.props.action}
                    data-colorScheme={this.props.colorScheme}
                    data-kid-directed-site={this.props.kidDirectedSite}
                    data-ref={this.props.reference}
                    data-share={this.props.share}
                    data-size={this.props.size}
                    data-show-faces={this.props.showFaces}>
                </div>
            );
        }
        return(
            <div>Loading...</div>
        );
    }
}

FbLike.propTypes = propTypes;
FbLike.defaultProps = defaultProps;