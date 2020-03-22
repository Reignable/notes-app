import { AddNoteButton } from 'Notes/AddNoteButton'
import { NotesList } from 'Notes/NotesList'
import React from 'react'
import { useSelector } from 'react-redux'
import { TEST_ID_NOTES_VIEW } from 'testIdentifiers'
import { selectNotesList, selectSelectedNote } from './notesSlice'

export const NotesView = () => {
  const notes = useSelector(selectNotesList)
  const selectedNote = useSelector(selectSelectedNote)

  return (
    <div data-testid={TEST_ID_NOTES_VIEW}>
      <AddNoteButton />
      <NotesList notes={notes} selectedNote={selectedNote} />
    </div>
  )
}
