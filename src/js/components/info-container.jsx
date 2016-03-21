'use strict';

import React from 'react';
import InfoBlock from './info-block.jsx';
import data from 'json!../../../data/info-block-data.json';

class InfoContainer extends React.Component {

    render () {

        var infoBlocks = data[this.props.id].map( (element) => {

            return <InfoBlock blockTitle={ element.title } blockImage={ element.image } blockText={ element.text } />
        });

        return (
            <div>
                <h3>{this.props.title}</h3>
                <div className="flex-container">
                    { infoBlocks }
                </div>
            </div>
        );
    }
}

export default InfoContainer;
