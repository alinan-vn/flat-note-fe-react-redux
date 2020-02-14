import React from 'react'
import { Grid } from 'semantic-ui-react'
import NoteList from './Notes'
import NoteForm from './NoteForm'

const Dashboard = () => (
  <Grid>
    <Grid.Column width={1}>

    </Grid.Column>

    <NoteList />

    <NoteForm />

  </Grid>
)

export default Dashboard

