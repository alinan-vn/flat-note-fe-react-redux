import React from 'react'
import { Grid, Form, Segment } from 'semantic-ui-react'
import NoteList from './Notes'
import { NoteForm } from './NoteForm'

const Dashboard = () => (
  <Grid>
    <Grid.Column width={1}>

    </Grid.Column>

    <NoteList />

    <Grid.Column width={10}>
        <Form>
            <Form.Input fluid label='Title' placeholder='my first note!' />
            <Form.TextArea label='Content' placeholder='Wow! This really is amazing! I wish someone had thought of making a note maker sooner!' />
            <Form.Input fluid label='Tags!' placeholder='Tag1, Tag2, Tag3, ...' />
            <Form.Button>Save</Form.Button>
            <Form.Button>Delete</Form.Button>
        </Form>
    </Grid.Column>
  </Grid>
)

export default Dashboard
