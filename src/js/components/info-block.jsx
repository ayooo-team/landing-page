'use strict';

import React from 'react';

class InfoBlock extends React.Component {

    render () {

        return (
            <div className="info-block-item">
                <h4>{ this.props.blockTitle }</h4>
                <img className="info-block-image" src={ this.props.blockImage } />
                <p>{ this.props.blockText }</p>
            </div>
        );
    }
}

export default InfoBlock;
