import noteActionTypes from './note-types'
//importing utility functions
import { funcToSortNotes, funcToSortByOldest } from './note-utils'

const initial_state = {
  notes: [],
  noteToEdit: {},
  editing: false,
  sorting: false,
}

const noteReducer = (state = initial_state, action) => {
  switch (action.type) {
    case noteActionTypes.ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      }
    case noteActionTypes.EDIT_NOTE:
      let noteToEdit = state.notes.find((note) => note.id === action.payload.id)

      return {
        ...state,

        noteToEdit: noteToEdit,
        editing: true,
      }

    case noteActionTypes.UPDATE_NOTE:
      let newNotes = state.notes.map((note) =>
        note.id === action.payload.id ? action.payload : note,
      )
      return {
        ...state,
        notes: newNotes,
        editing: false,
      }

    case noteActionTypes.DELETE_NOTE:
      console.log('before deleting notes:', state.notes)
      let newNotes2 = state.notes.filter((note) => note.id !== action.payload)
      return {
        ...state,
        notes: newNotes2,
      }

    case noteActionTypes.SORT_NOTE:
      return {
        ...state,
        sorting: true,
        notes: funcToSortNotes(state.notes, action.payload),
      }

    case noteActionTypes.SORT_NOTE_BY_OLDEST:
      return {
        ...state,
        sorting: false,
        notes: funcToSortByOldest(state.notes, action.payload),
      }

    default:
      return state
  }
}

export default noteReducer
