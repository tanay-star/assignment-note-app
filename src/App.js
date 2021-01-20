import './App.css'
//importing components
import TextArea from './components/TextArea/TextArea'
import NoteList from './components/NoteList'
import EditForm from './components/EditForm/EditForm'
//connecting to redux store
import { connect } from 'react-redux'

function App({ editing }) {
  return (
    <div className="App">
      {editing ? <EditForm /> : <TextArea />}
      <NoteList />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    editing: state.notes.editing,
  }
}

export default connect(mapStateToProps, null)(App)
