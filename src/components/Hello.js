import React, {Component} from 'react'
import {connect} from 'react-redux'

import Contact from './Contact'


const Title = ({children}) => (
    <div>
        <small>{children}</small>
    </div>
);

const SubTitle = ({children}) => (
    <p>
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