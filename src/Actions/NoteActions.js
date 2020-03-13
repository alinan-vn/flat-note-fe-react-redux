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

const saveNotes = notes => {
    return {
        type: 'SAVE_NOTES',
        notes
    }
}

export {
    changeNote,
    changeUser,
    saveNotes
}