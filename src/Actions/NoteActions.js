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

export {
    changeNote,
    changeUser
}