import React from 'react'
import { Grid, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { changeUser, saveNotes } from '../Actions/NoteActions'

class Login extends React.Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    fetchUser = () => {
        fetch('http://localhost:3000/users/')
            .then(resp => resp.json())
            .then(users => this.retrieveUser(users))
    }

    retrieveUser = (users) => {
        let correctUser = users.filter(user => user.username === this.state.username )
        this.props.changeUser(correctUser[0])
    }

    fetchNotes = userId => {
        fetch(`http://localhost:3000/user_notes/${userId}`)
        .then(r => r.json())
        .then(notes => {
            this.props.saveNotes(notes)
        })
    }

    setUser = e => {
        e.preventDefault()

        const userData = {
            username: this.state.username,
            password: this.state.password
        }

        const userObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        }

        this.setState({
            ...this.state,
            username: '',
            password: ''
        })

        fetch('http://localhost:3000/auth', userObj)
        .then(r => r.json())
        .then(user => {
            if (!user.error){
                this.props.changeUser(user)
                this.fetchNotes(user.id)
                this.props.history.push('/new-note')
            } else {
                alert(user.error)
            }
        })
    }

    handleCreateAccount = () => {
        this.props.history.push('/create-account')
    }

    render (){
        return (
            <Grid>
                <Grid.Column width={3}>
                </Grid.Column>

                <Grid.Column width={10}>
                    <Form>
                        <p style={{color: 'white'}}>Username</p>
                        <Form.Input 
                            fluid 
                            id='username'
                            value={this.state.username} 
                            placeholder='username'
                            onChange={this.handleChange}
                            color={'white'} 
                        />
                        <p style={{color: 'white'}}>Password</p>
                        <Form.Input 
                            fluid 
                            id='password'
                            type='password'
                            value={this.state.password}  
                            placeholder='password'
                            onChange={this.handleChange} 
                        />
                        <Form.Button onClick={ this.setUser }>Login!</Form.Button>
                        <a style={{cursor: 'pointer'}} onClick={this.handleCreateAccount}>Create an account!</a>
                    </Form>
                </Grid.Column>

                <Grid.Column width={3}>
                </Grid.Column>
            </Grid>
        )
    }
}

// const mapStateToProps = () => {
// }

const mapDispatchToProps = dispatch => {
    return {
        changeUser: (user) => {
            dispatch(changeUser(user))
        },
        saveNotes: notes => {
            dispatch(saveNotes(notes))
        }
    }
}

export default connect(null, mapDispatchToProps)(Login)
