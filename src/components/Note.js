import React from 'react'
//importing mui components
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  makeStyles,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
//importing actions
import { deleteNote } from '../redux/note/note-actions'
import { editNote } from '../redux/note/note-actions'
//connecting to the redux store
import { connect } from 'react-redux'

const useStyles = makeStyles({
  root: {
    minWidth: 175,
    margin: 50,
    padding: 10,
    '& .MuiSvgIcon-root': {
      cursor: 'pointer',
    },
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
  },
  body: {
    fontSize: 14,
    fontFamily: 'Montserrat',
  },
})

function Note({ id, title, body, date, deleteNote, editNote }) {
  const classes = useStyles()

  return (
    <Card className={classes.root} raised={true}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          {title}
        </Typography>
        <Typography className={classes.body} gutterBottom>
          {body}
        </Typography>
        <Typography gutterBottom>{date.toDateString()}</Typography>
      </CardContent>

      <CardActions>
        <DeleteIcon color="primary" onClick={() => deleteNote(id)} />
        <EditIcon color="primary" onClick={() => editNote(id, title, body)} />
      </CardActions>
    </Card>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteNote: (id) => dispatch(deleteNote(id)),
    editNote: (id, title, body) => dispatch(editNote(id, title, body)),
  }
}

export default connect(null, mapDispatchToProps)(Note)
