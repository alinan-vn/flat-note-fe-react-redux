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
    
    noteListCreator = () => {
        return this.props.notes.map(note => {
            return (
                <div key={note.id}>
                    <div 
                        className='ui divider' 
                        key={note.id} 
                        onClick={() => this.handleChangeNote(note.id) }
                    >
                        <p>{ note.title }</p>   
                    </div>
                    <hr />
                </div>
            )
        })
    }

    handleChangeNote = (noteId) => {
        let findNote = this.props.notes.find(note => note.id === noteId)
        console.log('note found?', findNote)
        this.props.changeNote(findNote)
    }

    render () {
        return (
            <Grid.Column width={4}>
            <Segment>
                <hr />
                <p>current user: <em>{ this.props.currentUser.username }</em></p>                
                <hr />
                { this.props.notes ? this.noteListCreator() : null }
                </Segment>
        </Grid.Column>
        )
    }
}

// probably unneccessary
const mapStateToProps = (state) => {
    return { 
        currentUser: state.currentUser,
        notes: state.notes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeNote: (note) => {
            dispatch(changeNote(note))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteList)
