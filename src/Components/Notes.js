import React from 'react'
import { Grid, Form, Segment } from 'semantic-ui-react'

export default class NoteList extends React.Component {
    constructor(){
        super()
        this.state = {
            notes: null
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
                        <div className='ui divider' key={note.id}>
                            <p>{ note.title }</p>   
                        </div>
                        <hr />
                    </div>
                )
            })
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








// const noteListCreator = (notesArray) => {
//     // return notesArray.map(note => {
//     //     return (
//     //         <div className='ui divider'>
//     //             <p>{ note.title }</p>
//     //         </div>
//     //     )
//     // })

//     console.log('in', notesArray)
// }

// const NoteList = () => {
//     return (
//         <Grid.Column width={3}>
//             {/* <FetchNotes /> */}
//             <Segment>
//                 <div className="ui divider">
//                     Some stuff
//                 </div>
//                 <hr />
//                 { noteListCreator(FetchNotes) }
//                 </Segment>
//         </Grid.Column>
//     )
// }

// export default NoteList