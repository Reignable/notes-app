import { AddNoteButton } from 'Notes/AddNoteButton'
import { NotesList } from 'Notes/NotesList'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TEST_ID_NOTES_VIEW } from 'testIdentifiers'
import {
  addNote,
  deleteNote,
  Note,
  selectNote,
  selectNotesList,
  selectSelectedNoteId,
} from './notesSlice'

export const NotesView = () => {
  const dispatch = useDispatch()
  const notes = useSelector(selectNotesList)
  const selectedNoteId = useSelector(selectSelectedNoteId)

  const handleAddNote = () => {
    dispatch(addNote())
  }

  const handleSelectNote = (id: Note['id']) => {
    dispatch(selectNote(id))
  }

  const handleDeleteNote = (id: Note['id']) => {
    dispatch(deleteNote(id))
  }

  return (
    <div data-testid={TEST_ID_NOTES_VIEW}>
      <AddNoteButton onClick={handleAddNote} />
      <NotesList
        notes={notes}
        selectedNoteId={selectedNoteId}
        onSelect={handleSelectNote}
        onDelete={handleDeleteNote}
      />
    </div>
  )
}
