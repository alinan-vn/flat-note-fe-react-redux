import React from 'react'
import { Image } from 'semantic-ui-react'

const backgroundAbout = () => (
    <div>
        <h1 style = {{ textAlign: 'center' }}>Please Log In!</h1>
        <Image src={require('../images/vaporware1.jpg')} fluid />
    </div>
)

export default backgroundAbout