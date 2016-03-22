'use strict';

import React from 'react';

class MailchimpForm extends React.Component {

    render () {

         return (
             <div id="mc_embed_signup">
                 <form action="//ayooo.us13.list-manage.com/subscribe/post?u=9b22e071762154661a79c8232&amp;id=e68945e250" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                     <div id="mc_embed_signup_scroll">
                         <h2>Register your interest in Ayooo!</h2>

                         <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>

                         <div className="mc-field-group">
                             <label htmlFor="mce-EMAIL">Email Address
                                 <span className="asterisk">*</span>
                             </label>
                             <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" ></input>
                         </div>

                         <div className="mc-field-group">
                             <label htmlFor="mce-FNAME">First Name</label>
                             <input type="text"  name="FNAME" className="" id="mce-FNAME" />
                         </div>

                         <div className="mc-field-group">
                             <label htmlFor="mce-LNAME">Last Name
                                 <span className="asterisk">*</span>
                             </label>
                             <input type="text" name="LNAME" className="required" id="mce-LNAME" />
                         </div>

                         <div className="mc-field-group">
                             <label htmlFor="mce-MMERGE3">Nationality</label>
                             <input type="text" name="MMERGE3" className="" id="mce-MMERGE3" />
                         </div>

                         <div className="mc-field-group input-group">
                             <strong>How do you think you would use our service?</strong>
                             <ul>
                                 <li>
                                     <input type="radio" value="as a shipper" name="MMERGE4" id="mce-MMERGE4-0" />
                                     <label htmlFor="mce-MMERGE4-0">as a shipper</label>
                                 </li>
                                 <li>
                                     <input type="radio" value="as a traveller" name="MMERGE4" id="mce-MMERGE4-1" />
                                     <label htmlFor="mce-MMERGE4-1">as a traveller</label>

                                 </li>
                                 <li>
                                     <input type="radio" value="both!" name="MMERGE4" id="mce-MMERGE4-2" />
                                     <label htmlFor="mce-MMERGE4-2">both!</label>
                                 </li>
                             </ul>
                         </div>

                         <div id="mce-responses" className="clear">
                             <div className="response" id="mce-error-response"></div>
                             <div className="response" id="mce-success-response"></div>
                         </div>

                         <div id="last-bit" aria-hidden="true">
                             <input type="text" name="b_9b22e071762154661a79c8232_e68945e250" tabIndex="-1"></input>
                         </div>
                         <div className="clear">
                             <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
                         </div>
                     </div>
                 </form>
             </div>
         );
    }
}

export default MailchimpForm;
