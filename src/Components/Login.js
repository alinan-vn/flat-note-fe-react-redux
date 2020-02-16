import React from 'react'
import { Grid, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { changeUser } from '../Actions/NoteActions'

class Login extends React.Component {
    constructor(){
        super()
        this.state = {
            usernameLog: undefined,
            passwordLog: undefined
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
        let correctUser = users.filter(user => user.username === this.state.usernameLog )
        console.log('loggin in?', correctUser[0])
        this.props.changeUser(correctUser[0])
    }

    setUser = () => {
        this.fetchUser()
    }

    render (){
        return (
            <Grid>
                <Grid.Column width={3}>
                </Grid.Column>

                <Grid.Column width={10}>
                    <Form>
                        <Form.Input 
                            fluid label='Username'
                            id='usernameLog'
                            value={this.state.usernameLog} 
                            placeholder='username'
                            onChange={this.handleChange} 
                        />
                        <Form.Input 
                            fluid label='Password'
                            id='passwordLog'
                            value={this.state.passwordLog}  
                            placeholder='password'
                            onChange={this.handleChange} 
                        />
                        <Form.Button onClick={ this.setUser }>Login!</Form.Button>
                    </Form>
                </Grid.Column>

                <Grid.Column width={3}>
                </Grid.Column>
            </Grid>
        )
    }
}


const mapStateToProps = () => {

}

const mapDispatchToProps = dispatch => {
    return {
        changeUser: (user) => {
            dispatch(changeUser(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
