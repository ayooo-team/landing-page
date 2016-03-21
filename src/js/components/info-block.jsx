'use strict';

import React from 'react';

class InfoBlock extends React.Component {

    render () {

        return (
            <div className="flex-item">
                <h4>{this.props.blockTitle}</h4>
                <p>
                    This is some text.
                </p>
            </div>
        );
    }
}

export default InfoBlock;
