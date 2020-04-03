import { AddNoteButton } from 'Notes/AddNoteButton'
import { NotesList } from 'Notes/NotesList'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TEST_ID_NOTES_VIEW } from 'testIdentifiers'
import {
  selectNotesList,
  selectSelectedNote,
  addNote,
  Note,
  selectNote,
} from './notesSlice'

export const NotesView = () => {
  const dispatch = useDispatch()
  const notes = useSelector(selectNotesList)
  const selectedNote = useSelector(selectSelectedNote)

  const handleAddNoteClick = () => {
    dispatch(addNote())
  }

  const handleSelectNote = (id: Note['id']) => {
    dispatch(selectNote(id))
  }

  return (
    <div data-testid={TEST_ID_NOTES_VIEW}>
      <AddNoteButton onClick={handleAddNoteClick} />
      <NotesList
        notes={notes}
        selectedNote={selectedNote}
        onSelect={handleSelectNote}
      />
    </div>
  )
}
