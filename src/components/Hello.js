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

const Hello = ({name, title, subtitle, resources}) => (
    <div className='hello'>
        {/*<Icon />*/}
        <h1>
            {name}
            <Title>{title}</Title>
        </h1>
        <p>
            { resources.map(res=>(<span key={res}>{res}</span>)) }
        </p>
        <Contact/>
    </div>
)

export default connect( state => state )(Hello)