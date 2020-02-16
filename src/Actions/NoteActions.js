 const changeNote = (note) => {
    return {
        type: 'CHANGE_NOTE',
        note
    }
}

const revertNote = (note) => {
    return {
        type: 'REVERT_NOTE',
        note
    }
}

export {
    changeNote,
    revertNote
}