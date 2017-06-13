import React, {Component} from 'react'
import {connect} from 'react-redux'

import Contact from './Contact'
import Icon from './Icon'


const Title = ({children}) => (
    <small>{children}</small>
);

const SubTitle = ({children}) => (
    <p className="subtitle">
        &ldquo;{children}&rdquo;
    </p>
);

const Hello = ({name, title, subtitle}) => (
    <div className='hello'>
        <Icon />
        <h1>
            {name}
            <Title>{title}</Title>
        </h1>
        <Contact/>
    </div>
)

export default connect( state => state )(Hello)