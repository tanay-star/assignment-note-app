import noteActionTypes from './note-types'

export const addNote = (note) => {
  return {
    type: noteActionTypes.ADD_NOTE,
    payload: note,
  }
}

export const deleteNote = (id) => {
  return {
    type: noteActionTypes.DELETE_NOTE,
    payload: id,
  }
}

export const editNote = (id, title, body) => {
  return {
    type: noteActionTypes.EDIT_NOTE,
    payload: { id, title, body },
  }
}

export const updateNote = (newNote) => {
  return {
    type: noteActionTypes.UPDATE_NOTE,
    payload: newNote,
  }
}

export const sortNote = (sortValue) => {
  return {
    type: noteActionTypes.SORT_NOTE,
    payload: sortValue,
  }
}
