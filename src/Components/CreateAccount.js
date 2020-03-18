import React from 'react'
import { connect } from 'react-redux'
import { Grid, Form } from 'semantic-ui-react'
import { changeUser, saveNotes } from '../Actions/NoteActions'

class CreateAccount extends React.Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: '',
            password_confirmation: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    saveUser = () => {
        const userData = {
            username: this.state.username,
            password: this.state.password
        }

        const userObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(userData)
        }

        fetch('http://localhost:3000/users', userObj)
        .then(r => r.json())
        .then(user => {
            if (!user.error){
                this.props.changeUser(user)
                this.props.history.push('/new-note')
            } else {
                alert(user.error)
            }
        })
    }

    createUser = () => {
        if(this.state.password === this.state.password_confirmation){
            this.saveUser()
        } else {
            alert('Password does not match confirmation')
        }
    }

    render(){
        return(
            <Grid>
                <Grid.Column width={4} />

                <Grid.Column width={6}>
                    <Form>
                        <p>Username</p>
                        <Form.Input 
                            fluid
                            id='username'
                            value={this.state.username}
                            placeholder='username'
                            onChange={this.handleChange}
                            color={'white'}
                        />

                        <p>Password</p>
                        <Form.Input 
                            fluid
                            id='password'
                            value={this.state.password}
                            placeholder='password'
                            onChange={this.handleChange}
                            type='password'
                            color={'white'}
                        />

                        <p>Confirm Your Password</p>
                        <Form.Input 
                            fluid
                            id='password_confirmation'
                            value={this.state.password_confirmation}
                            placeholder='password confirmation'
                            onChange={this.handleChange}
                            type='password'
                            color={'white'}
                        />

                        <Form.Button onClick={this.createUser}>Create!</Form.Button>

                    </Form>
                </Grid.Column>
            </Grid>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeUser: user => {
            dispatch(changeUser(user))
        },
        saveNotes: notes => {
            dispatch(saveNotes(notes))
        }
    }
}

export default connect(null, mapDispatchToProps)(CreateAccount)