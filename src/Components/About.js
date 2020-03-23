import React from 'react'
import { Grid } from 'semantic-ui-react'

const backStyle = {
    background: '#44d9e6', 
    borderRadius: '10px', 
    marginTop: '30px',
    boxShadow: '5px 10px #3dc4d0',
    fontSize: '20px'
}

const backgroundAbout = () => (

    
    
    <Grid>
        <Grid.Column width={3} />

        <Grid.Column 
            width={10} 
            style={{fontColor: '#e4fcf9'}}
        >
            <div style={backStyle}>
                <h1 style={{textAlign: 'center'}}>About FlatNote</h1>
                <p style={{marginLeft: '10px'}}>
                    FlatNote is a simple web application that serves to hold notes and thoughts you may have that can be deleted and editted later on.
                </p>
                <p style={{marginLeft: '10px'}}>
                    Create a user to get started! Note: do not forget your password, a simple password such as 'guest' or 'password' or '123' is recommended for this small project. 
                </p><br />
            </div>
            
        </Grid.Column>
    </Grid>
)

export default backgroundAbout