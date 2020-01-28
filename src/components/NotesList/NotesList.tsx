import { List } from '@material-ui/core'
import React from 'react'
import { RouteComponentProps, useParams, withRouter } from 'react-router-dom'
import { Note } from '../../model/Note'
import { notesService } from '../../services/NotesService'
import { NotesListItem } from './NotesListItem/NotesListItem'

interface NotesListProps extends RouteComponentProps {
  notes: Note[]
  onDeleteNote: () => void
}

export const NotesList = (props: NotesListProps) => {
  const { selectedNoteId } = useParams()

  const handleDelete = (id: string | number) => {
    notesService.deleteNote(id).finally(() => {
      if (`${id}` === selectedNoteId) {
        props.history.push('/')
      }
      props.onDeleteNote()
    })
  }

  return (
    <List style={{ maxHeight: '87vh', overflow: 'auto' }}>
      {props.notes.map(note => (
        <NotesListItem
          selected={`${note.id}` === selectedNoteId}
          key={`${note.id}${note.lastEdited}`}
          onDelete={handleDelete}
          {...note}
        />
      ))}
    </List>
  )
}

export default withRouter(NotesList)
