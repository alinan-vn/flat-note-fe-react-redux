function rootReducer (
    state = {
        currentUser: {id: null, username: undefined},
        currentNote: null,
        notes: []
    },
    action
){
    switch(action.type){
        case 'FIRST_CASE':
            return console.log('DID FIRST CASE SUCCESS')
        case 'CHANGE_NOTE':
            console.log('change note action, current note is now:', action.note)
            return {
                ...state,
                currentNote: action.note
            }
        case 'SAVE_NOTES':
            console.log('saving all notes', action.notes)
            return {
                ...state,
                notes: action.notes
            }
        case 'CHANGE_USER':
            console.log('changing user:', action.user)
            return {
                ...state,
                currentUser: action.user
            }
        case 'LOGOUT_USER':
            console.log('User logs out')
            return {
                currentUser: {id: null, username: undefined},
                currentNote: null,
                notes: []
            }
        case 'ADD_NOTE':
            console.log('adding note', action.note)
            const newNotes = state.notes.push(action.note)
            console.log(state.notes)
            return state
        case 'DELETE_NOTE':
            console.log('deleting this note:', action.noteId)
            const newerNotes = state.notes.filter(note => note.id !== action.noteId)
            console.log('new notes after deletion', newerNotes)
            return {
                ...state,
                notes: newerNotes
            }
        default:
            return state
    }
}

export default rootReducer
