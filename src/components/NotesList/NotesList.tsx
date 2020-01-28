import { List } from '@material-ui/core'
import React from 'react'
import { useParams, RouteComponentProps, withRouter } from 'react-router-dom'
import { Note } from '../../model/Note'
import { NotesListItem } from './NotesListItem/NotesListItem'
import { notesService } from '../../services/NotesService'

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

  return props.notes ? (
    <List>
      {props.notes.map(note => (
        <NotesListItem
          selected={`${note.id}` === selectedNoteId}
          key={`${note.id}${note.lastEdited}`}
          onDelete={handleDelete}
          {...note}
        />
      ))}
    </List>
  ) : (
    <div>No notes</div>
  )
}

export default withRouter(NotesList)
