import React, {Component} from 'react';
import {connect} from 'react-redux';

const Center = ({children}) => (
    <div className="center">{children}</div>
);

export default connect( state => state )(Center);