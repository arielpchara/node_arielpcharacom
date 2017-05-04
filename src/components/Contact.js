import React, {Component} from 'react';
import {connect} from 'react-redux';


const GitHubLink = ({username, children}) => (
    <span>
        <i className="fa fa-github"></i> &nbsp;
        <a href={ "https://github.com/" + username } target="_blank">{children}</a>
    </span>
)


const ContactEmailLink = ({email}) => (
       <span>
        <span className="icon"> @ </span> &nbsp; 
        <a href={'mailto:' + email}>{email}</a>
       </span>
);

const Contact = ({contact}) => (
    <div className="contact">
        <ContactEmailLink email={contact.email}/>
        <br/>
        <GitHubLink username="arielpchara">https://github.com/arielpchara</GitHubLink>
    </div>
);

export default connect( state => state )(Contact);