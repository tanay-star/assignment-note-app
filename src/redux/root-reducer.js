import { combineReducers } from 'redux'
import noteReducer from './note/note-reducer'

const rootReducer = combineReducers({
  notes: noteReducer,
})

export default rootReducer
