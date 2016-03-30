'use strict';

import tape from 'tape';
import React from 'react';
import shallowRenderer from './utils/shallowRenderer.js';
import AppContainer from '../src/js/components/app-container.jsx';

tape('This is a fake test', (t) => {

    t.equal(1, 1, "one and one are equal");
    t.end();
});

tape('this is a react test', (t) => {

    const rendered = shallowRenderer(<AppContainer />);
    t.end();
});
