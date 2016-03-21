'use strict';

import React from 'react';
import InfoBlock from './info-block.jsx';

class InfoContainer extends React.Component {

    render () {

        return (
            <div>
                <h3>{this.props.title}</h3>
                <div className="flex-container">
                    <InfoBlock blockTitle="Sender" />
                    <InfoBlock blockTitle="Ayooo" />
                    <InfoBlock blockTitle="Traveller" />
                </div>
            </div>
        );
    }
}

export default InfoContainer;
