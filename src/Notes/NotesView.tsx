import { AddNoteButton } from 'Notes/AddNoteButton'
import { NotesList } from 'Notes/NotesList'
import React from 'react'
import { useSelector } from 'react-redux'
import { TEST_ID_NOTES_VIEW } from 'testIdentifiers'
import { selectNotesList } from './notesSlice'

export const NotesView = () => {
  const notes = useSelector(selectNotesList)

  return (
    <div data-testid={TEST_ID_NOTES_VIEW}>
      <AddNoteButton />
      <NotesList notes={notes} />
    </div>
  )
}
