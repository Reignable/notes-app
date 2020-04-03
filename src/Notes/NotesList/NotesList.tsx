import { Notes, Note } from 'Notes/notesSlice'
import React from 'react'
import { TEST_ID_NOTES_LIST } from 'testIdentifiers'
import { NotesListItem } from './NotesListItem/NotesListItem'

type NotesListProps = {
  notes: Notes
  selectedNote?: number
  onSelect?(id: Note['id']): void
}

export const NotesList = (props: NotesListProps) => (
  <ul data-testid={TEST_ID_NOTES_LIST}>
    {props.notes.map(note => (
      <NotesListItem
        key={note.id}
        selected={props.selectedNote === note.id}
        onSelect={props.onSelect}
        {...note}
      />
    ))}
  </ul>
)
