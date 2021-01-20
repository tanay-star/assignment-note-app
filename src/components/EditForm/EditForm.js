import React, { useState } from 'react'
import '../TextArea/TextArea.css'
//importing mui components
import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  DatePicker,
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import UpdateIcon from '@material-ui/icons/Update'
//connecting to redux store
import { connect } from 'react-redux'
//importing actions
import { updateNote } from '../../redux/note/note-actions'

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(4),
    position: 'absolute',
    right: '18px',
    bottom: '-18px',
    color: '#fff',
  },
}))

const EditForm = ({ noteToEdit, updateNote }) => {
  const [note, setNote] = useState(noteToEdit)
  const classes = useStyles()

  const handleChange = (e) => {
    const { name, value } = e.target
    setNote({ ...note, [name]: value })
  }

  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    updateNote(note)
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          placeholder="Title"
          value={note.title}
        />
        <textarea
          name="body"
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
          value={note.body}
        />

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            disableFuture
            openTo="year"
            format="dd/MM/yyyy"
            label="Date of birth"
            views={['year', 'month', 'date']}
            name="date"
            value={note.date}
            onChange={(date) =>
              handleChange(convertToDefEventPara('date', date))
            }
          />
        </MuiPickersUtilsProvider>

        <Fab
          onClick={handleSubmit}
          size="small"
          className={classes.root}
          color="primary"
        >
          <UpdateIcon />
        </Fab>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    noteToEdit: state.notes.noteToEdit,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNote: (note) => dispatch(updateNote(note)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditForm)
