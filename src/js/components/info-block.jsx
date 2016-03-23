'use strict';

import React from 'react';

class InfoBlock extends React.Component {

    render () {

        return (
            <div className="info-block-item">
                <img className={ "info-block-image info-block-image-" + this.props.blockTitle } src={ this.props.blockImage } />
                <h4 className="info-block-title">{ this.props.blockTitle }</h4>
                <p className="info-block-text">{ this.props.blockText }</p>
            </div>
        );
    }
}

export default InfoBlock;
