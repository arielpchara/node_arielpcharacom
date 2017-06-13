import React, {Component} from 'react';
import {connect} from 'react-redux';

const Center = ({srcIcon}) => (
    <img src={srcIcon}/>
);

export default connect( state => state )(Center);