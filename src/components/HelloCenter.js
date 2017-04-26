import React, {Component} from 'react';
import {connect} from 'react-redux';

import Center from './Center'
import Hello from './Hello'

const HelloCenter = () => (
    <Center><Hello/></Center>
)

export default connect( state => state )(HelloCenter);