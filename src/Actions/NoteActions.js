 const changeNote = (note) => {
    return {
        type: 'CHANGE_NOTE',
        note
    }
}

const changeUser = (user) => {
    return {
        type: 'CHANGE_USER',
        user
    }
}

const logoutUser = () => {
    return {
        type: 'LOGOUT_USER'
    }
}

const saveNotes = notes => {
    return {
        type: 'SAVE_NOTES',
        notes
    }
}

const addNote = note => {
    return {
        type: 'ADD_NOTE',
        note
    }
}

const deleteNote = noteId => {
    return {
        type: 'DELETE_NOTE',
        noteId
    }
}

export {
    changeNote,
    changeUser,
    saveNotes,
    addNote,
    deleteNote,
    logoutUser
}