import React, {Component} from 'react'
import {connect} from 'react-redux'

import Contact from './Contact'


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
        <h1>
            {name}
            <Title>{title}</Title>
        </h1>
        <SubTitle>{subtitle}</SubTitle>
        <Contact/>
    </div>
)

export default connect( state => state )(Hello)