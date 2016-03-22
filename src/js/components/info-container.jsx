'use strict';

import React from 'react';
import InfoBlock from './info-block.jsx';
import data from '../../../data/info-block-data.json';

class InfoContainer extends React.Component {

    render () {

        var infoBlocks = data[this.props.id].map( (element, index, array) => {

            return <InfoBlock key={ index } blockTitle={ element.title } blockImage={ element.image } blockText={ element.text } />
        });

        return (
            <div>
                <a name={ this.props.id }></a>
                <h3>{ this.props.title }</h3>
                <div className="info-block-container">
                    { infoBlocks }
                </div>
            </div>
        );
    }
}

export default InfoContainer;
