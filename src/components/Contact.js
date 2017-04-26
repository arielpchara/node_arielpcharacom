import React, {Component} from 'react';
import {connect} from 'react-redux';



const ContactEmail = ({email}) => (
    <div className="contact-email">
       <a href={'mailto:' + email}>{email}</a>
    </div>
);



const Contact = ({contact}) => (
    <div className="contact">
        <ContactEmail email={contact.email}/>
    </div>
);

export default connect( state => state )(Contact);