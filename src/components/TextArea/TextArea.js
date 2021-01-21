import React, { useState } from 'react'
import './TextArea.css'
//importing mui components
import Fab from '@material-ui/core/Fab'
import Button from '@material-ui/core/Button'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  DatePicker,
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { makeStyles } from '@material-ui/core/styles'
//connecting to redux store
import { connect } from 'react-redux'
//importing actions
import {
  addNote,
  sortNote,
  sortNoteByOldest,
} from '../../redux/note/note-actions'

import AddIcon from '@material-ui/icons/Add'

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(4),
    position: 'absolute',
    right: '18px',
    bottom: '-18px',
    color: '#fff',
  },
  button: {
    margin: theme.spacing(2),
  },
}))

const TextArea = ({ addNote, sortNote, sortNoteByOldest }) => {
  const [note, setNote] = useState({
    id: 0,
    title: '',
    body: '',
    date: new Date(),
  })

  const classes = useStyles()

  const handleChange = (e) => {
    const { name, value } = e.target
    setNote({ ...note, id: new Date().getTime(), [name]: value })
  }

  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (note.title || note.body) {
      addNote(note)
    }
    setNote({ ...note, id: 0, title: '', body: '', date: new Date() })
  }

  const handleSort = (e) => {
    console.log(e.target.value)
    sortNote(e.target.value)
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
            label="Date"
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
          <AddIcon />
        </Fab>
      </form>

      <Button
        variant="contained"
        className={classes.button}
        color="primary"
        onClick={() => sortNote('Newest')}
      >
        Newest
      </Button>

      <Button
        variant="contained"
        className={classes.button}
        onClick={() => sortNoteByOldest('Oldest')}
        color="primary"
      >
        Oldest
      </Button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (note) => dispatch(addNote(note)),
    sortNote: (sort) => dispatch(sortNote(sort)),
    sortNoteByOldest: (sort) => dispatch(sortNoteByOldest(sort)),
  }
}

export default connect(null, mapDispatchToProps)(TextArea)
