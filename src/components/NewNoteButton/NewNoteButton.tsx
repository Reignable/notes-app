import { Button } from '@material-ui/core'
import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { Note } from '../../model/Note'
import { notesService } from '../../services/NotesService'

interface NewNoteButtonProps extends RouteComponentProps {
  fullWidth?: boolean
  onNoteAdded: (newNote: Note) => void
}

const NewNoteButton = (props: NewNoteButtonProps) => {
  const createNote = () => {
    notesService.addNote().then(newNote => {
      props.onNoteAdded(newNote)
      props.history.push(`/${newNote.id}`)
    })
  }

  return (
    <Button
      fullWidth={props.fullWidth}
      color="primary"
      variant="contained"
      onClick={createNote}
    >
      New Note
    </Button>
  )
}

export default withRouter(NewNoteButton)
