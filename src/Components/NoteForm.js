import React from 'react'
import { Grid, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { changeNote, saveNotes, deleteNote } from '../Actions/NoteActions'

class NoteForm extends React.Component {

    constructor(){
        super()
        this.state = {
            id: '',
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


    editStoreNotes = () => {
        const newNotes = this.props.notes.map(note => {
            if (note.id === this.state.id){
                return this.state
            } else {
                return note
            }
        })

        this.props.saveNotes(newNotes)

    }

    editNote = () => { 
        if (this.state.title === ''){
            alert('Please choose a note to EDIT!')
        } else {
            const noteData = {
                ...this.state,
                user_id: this.props.currentUser.id
            }

            const reqObj = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(noteData)
            }

            this.editStoreNotes()

            fetch(`http://localhost:3000/notes/${this.state.id}`, reqObj)
            .then(resp => resp.json())
            .then(json => {console.log('json??', json)})
        }
        
    }

    deleteNote = () => {
        if(this.state.title === ''){
            alert('Please choose a note to DELETE!')
        } else {
            const noteData = {
                ...this.state,
                user_id: this.props.currentUser.id
            }

            const reqObj = {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(noteData)
            }

            fetch(`http://localhost:3000/notes/${this.state.id}`, reqObj)
            .then(resp => resp.json())
            .then(json => {
                this.props.deleteNote(this.state.id)
            })

            this.setState({
                ...this.state,
                title: '',
                content: '',
                tags: ''
            })
        }
        
    }

    renderForm = () => {
        if (this.props.currentNote){
            this.setState({
                id: this.props.currentNote.id,
                title: this.props.currentNote.title,
                content: this.props.currentNote.content,
                tags: this.props.currentNote.tags
            })
            this.props.changeNote(null)

        }
        return (
            <Form>
                <p style={{color: 'white'}}>Title</p>
                <Form.Input 
                    fluid 
                    id='title'
                    placeholder='title will be rendered here to edit!'
                    value={ this.state.title }
                    onChange={this.handleInputChange}
                />
                <p style={{color: 'white'}}>Content</p>
                <Form.TextArea 
                    id='content'
                    placeholder='I bet you can guess what will be rendered in the content section ;)'
                    value={ this.state.content } 
                    onChange={this.handleInputChange}
                />
                <p style={{color: 'white'}}>Tags!</p>
                <Form.Input 
                    fluid 
                    id='tags'
                    placeholder='actually, tags wont be rendered here... will they?'     
                    value={ this.state.tags }
                    onChange={this.handleInputChange}
                />
                
                <Form.Button onClick={this.editNote}>Save</Form.Button>
                <Form.Button onClick={this.deleteNote}>Delete</Form.Button>

            </Form>
        )
    }

    render () {
        return(
            <Grid.Column width={10}>
                { this.renderForm() }
            </Grid.Column>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeNote: (note) => {
            dispatch(changeNote(note))
        },
        saveNotes: notes => {
            dispatch(saveNotes(notes))
        },
        deleteNote: noteId => {
            dispatch(deleteNote(noteId))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        currentNote: state.currentNote,
        currentUser: state.currentUser,
        notes: state.notes
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)
