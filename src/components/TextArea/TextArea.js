import React, { useState } from 'react'
import './TextArea.css'
//importing mui components
import Fab from '@material-ui/core/Fab'
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
import { addNote, sortNote } from '../../redux/note/note-actions'

import AddIcon from '@material-ui/icons/Add'

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(4),
    position: 'absolute',
    right: '18px',
    bottom: '-18px',
    color: '#fff',
  },
}))

const TextArea = ({ addNote, sortNote }) => {
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
          <AddIcon />
        </Fab>
      </form>

      <select defaultValue="Sort" onChange={handleSort}>
        <option disabled value="Sort">
          Sort
        </option>
        <option value="Newest">Newest</option>
        <option value="Oldest">Oldest</option>
      </select>

      <select defaultValue="Sort">
        <option disabled value="Sort">
          Sort
        </option>
        <option value="Newest">Newest</option>
        <option value="Oldest">Oldest</option>
      </select>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (note) => dispatch(addNote(note)),
    sortNote: (sortValue) => dispatch(sortNote(sortValue)),
  }
}

export default connect(null, mapDispatchToProps)(TextArea)
