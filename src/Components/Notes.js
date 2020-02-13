import React from 'react'
import { Grid, Form, Segment } from 'semantic-ui-react'

const NoteList = () => {
    return (
        <Grid.Column width={3}>
            <Segment>
                <div className="ui divider">
                    Some stuff
                </div>
                <hr />
                <div className="ui divider">
                    Some stuff
                </div>
                <hr />
                <div className="ui divider">
                    Some stuff
                </div>
                <hr />
                <div className="ui divider">
                    Some stuff
                </div>
                <hr />
                </Segment>
        </Grid.Column>
    )
}

export default NoteList