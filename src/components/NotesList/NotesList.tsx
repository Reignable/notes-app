import { List } from '@material-ui/core'
import React from 'react'
import { useParams } from 'react-router-dom'
import { Note } from '../../model/Note'
import { NotesListItem } from './NotesListItem/NotesListItem'

interface NotesListProps {
  notes: Note[]
}

export const NotesList = (props: NotesListProps) => {
  const { selectedNoteId } = useParams()
  return props.notes ? (
    <List>
      {props.notes.map(note => (
        <NotesListItem
          selected={note.id === selectedNoteId}
          key={`${note.id}${note.lastEdited}`}
          {...note}
        />
      ))}
    </List>
  ) : (
    <div>No notes</div>
  )
}
