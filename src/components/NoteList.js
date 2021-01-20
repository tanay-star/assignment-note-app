import React from 'react'
//importing mui components
import { Grid } from '@material-ui/core'
//importing components
import Note from './Note'
//connecting to redux store
import { connect } from 'react-redux'

function NoteList({ notes }) {
  console.log('sortedNotes:', notes)
  return (
    <Grid container alignItems="center">
      {notes.map((note, index) => {
        return (
          <Grid key={index} item md={3} sm={6} xs={12}>
            <Note
              id={note.id}
              title={note.title}
              body={note.body}
              date={note.date}
            />
          </Grid>
        )
      })}
    </Grid>
  )
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes.notes,
  }
}

export default connect(mapStateToProps, null)(NoteList)
