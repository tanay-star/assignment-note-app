import './App.css'
//importing components
import TextArea from './components/TextArea/TextArea'
import NoteList from './components/NoteList'
import EditForm from './components/EditForm/EditForm'
import SortedNoteList from './components/SortedNoteList'
//connecting to redux store
import { connect } from 'react-redux'

function App({ editing, sorting }) {
  return (
    <div className="App">
      {editing ? <EditForm /> : <TextArea />}
      {sorting ? <SortedNoteList /> : <NoteList />}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    editing: state.notes.editing,
    sorting: state.notes.sorting,
  }
}

export default connect(mapStateToProps, null)(App)
