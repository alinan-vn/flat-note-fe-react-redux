import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
// import { NoteForm } from './NoteForm'
import { connect } from 'react-redux'
import { changeNote } from '../Actions/NoteActions'

class NoteList extends React.Component {
    constructor(){
        super()
        this.state = {
            notes: null,
            clickedNoteId: null,
        }
    }

    FetchNotes = (noteId = null) => {
        // console.log(noteId)
        let BASE_URL = 'http://localhost:3000/notes/'

        if (noteId) {
            BASE_URL = BASE_URL + noteId
        } 

        return fetch(BASE_URL)
            .then(resp => resp.json())
            .then(notes => this.renderNotes(notes, 'alejandro'))
    }
    
    renderNotes = (notes, username) => {
        let filteredNotes = notes.filter(note => note.user.username === username )
        this.setState({
            notes: filteredNotes
        })
    }

    noteListCreator = (notesArray) => {
            return notesArray.map(note => {
                return (
                    <div key={note.id}>
                        <div className='ui divider' key={note.id} onClick={() => this.handleChangeNote(note.id) }>
                            <p>{ note.title }</p>   
                        </div>
                        <hr />
                    </div>
                )
            })
    }

    handleChangeNote = (noteId) => {
        console.log('changeing note?', noteId)
        let findNote = this.state.notes.filter(note => note.id === noteId)
        this.setState = {
            clickedNoteId: findNote
        }
        this.props.changeNote(findNote)
    }


    componentDidMount(){
        this.FetchNotes()
    }

    render () {
        return (
            <Grid.Column width={4}>
            <Segment>
                <hr />
                { this.state.notes ? this.noteListCreator(this.state.notes) : null }
                </Segment>
        </Grid.Column>
        )
    }
}

// probably unneccessary
// mapStateToProps = (state) => {
//     return { 
//     }
// }

const mapDispatchToProps = dispatch => {
    return {
        changeNote: (note) => {
            dispatch(changeNote(note))
        }
    }
}

export default connect(null, mapDispatchToProps)(NoteList)
