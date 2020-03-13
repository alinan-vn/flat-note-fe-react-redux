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
            console.log('change note action, current note is now:', action.note[0] )
            return {
                ...state,
                currentNote: action.note[0]
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
        default:
            return state
    }
}

export default rootReducer
