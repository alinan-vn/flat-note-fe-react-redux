import React from 'react'
import { Grid, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addNote } from '../Actions/NoteActions'

class NewNote extends React.Component {
    constructor(){
        super()
        this.state = {
            title: '',
            content: '',
            tags: ''
        }
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    saveNote = () => {
        const noteData = {
            ...this.state,
            user_id: this.props.currentUser.id
        }

        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(noteData)
        }

        this.setState({
            ...this.state,
            title: '',
            content: '',
            tags: ''
        })

        fetch('http://localhost:3000/notes', reqObj)
            .then(resp => resp.json())
            .then(note => {
                console.log('json??', note)
                this.props.addNote(note)
            })
    }

    render (){
        return (
            <Grid>
                <Grid.Column width={3}>
                </ Grid.Column>
  
                <Grid.Column width={10}>
                    <Form ref={form => this.form = form}>
                        <p style={{color: 'white'}}>Title</p>
                        <Form.Input 
                            fluid 
                            id='title'
                            placeholder='my first note!'
                            value = {this.state.title}
                            onChange={this.handleInputChange}
                        />
                        <p style={{color: 'white'}}>Content</p>
                        <Form.TextArea 
                            placeholder='Wow! This really is amazing! I wish someone had thought of making a note maker sooner!' 
                            id='content'
                            value = {this.state.content}
                            onChange={this.handleInputChange}
                        />
                        <p style={{color: 'white'}}>Tags!</p>
                        <Form.Input 
                            fluid 
                            id='tags'
                            placeholder='Tag1, Tag2, Tag3, ...' 
                            value = {this.state.tags}
                            onChange={this.handleInputChange}
                        />
                        <Form.Button onClick={this.saveNote}>Save</Form.Button>
                    </Form>
                </Grid.Column>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentNote: state.currentNote,
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNote: note => {
            dispatch(addNote(note))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewNote)