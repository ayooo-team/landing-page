'use strict';

import React from 'react';

class Footer extends React.Component {

    render () {

        return(
            <div className="footer">
                <div className="social-media">
                    <a href="">
                        <img className='social-media-icon' src="https://cloud.githubusercontent.com/assets/13470325/13983510/17ba569e-f0e8-11e5-88f5-6c8a7901c5b7.png"/>
                    </a>
                    <a href="">
                        <img className='social-media-icon' src="https://cloud.githubusercontent.com/assets/13470325/13983438/acbaf722-f0e7-11e5-984e-62f2f427864a.png"/>
                    </a>
                    <a href="">
                        <img className='social-media-icon' src="https://cloud.githubusercontent.com/assets/13470325/13983777/b810ec74-f0e9-11e5-8cee-45542e8f60ad.png"/>
                    </a>
                    <a href="">
                        <img className='social-media-icon' src="https://cloud.githubusercontent.com/assets/13470325/13983456/c1b8c910-f0e7-11e5-92a3-1c80c46b2b08.png"/>
                    </a>
                    <a href="">
                        <img className='social-media-icon' src="https://cloud.githubusercontent.com/assets/13470325/13983486/fb90d772-f0e7-11e5-89d5-307583c09b61.png"/>
                    </a>
                    <a href="">
                        <img className='social-media-icon' src="https://cloud.githubusercontent.com/assets/13470325/13983493/006aff16-f0e8-11e5-8d27-d65acc0feb1c.png"/>
                    </a>
                    <a href="">
                        <img className='social-media-icon' src="https://cloud.githubusercontent.com/assets/13470325/13983497/02e34bb8-f0e8-11e5-8129-6105beecb13c.png"/>
                    </a>
                </div>
                <p className="footer-copyright">
                    AYOOO, Ltd. All Rights Reserved 2016
                </p>
            </div>
        );
    }
}

export default Footer;
