import React from 'react'
import { Grid } from 'semantic-ui-react'

const backgroundAbout = () => (
    <Grid>
        <Grid.Column width={3} />

        <Grid.Column 
            width={10} 
            style={{fontColor: '#e4fcf9'}}
        >
            <h1 style={{textAlign: 'center'}}>About FlatNote</h1>
            <p>
                FlatNote is a simple web application that serves to hold notes and thoughts you may have that can be deleted and editted later on.
            </p>
            <p>
                Currently, you need to create an account which is seeded in the backend. Then you may log in to use the functionalities.
            </p>
            <p>
                Creating a user in the web application itself will be available soon. 
            </p>
        </Grid.Column>
    </Grid>
)

export default backgroundAbout