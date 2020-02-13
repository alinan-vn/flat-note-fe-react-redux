import React from 'react'
import { Grid, Form } from 'semantic-ui-react'

const Login = () => (
  <Grid>
    <Grid.Column width={3}>
    </Grid.Column>

    <Grid.Column width={10}>
        <Form>
            <Form.Input fluid label='Username' placeholder='username' />
            <Form.Input fluid label='Password' placeholder='password' />
            <Form.Button>Login!</Form.Button>
        </Form>
    </Grid.Column>

    <Grid.Column width={3}>
    </Grid.Column>
  </Grid>
)

export default Login
