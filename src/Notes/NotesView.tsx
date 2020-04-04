import { AddNoteButton } from 'Notes/AddNoteButton'
import { NotesList } from 'Notes/NotesList'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TEST_ID_NOTES_VIEW } from 'testIdentifiers'
import {
  addNote,
  deleteNote,
  Note,
  selectNote,
  selectNotesList,
  selectSelectedNoteId,
  selectSelectedNote,
  updateNote,
} from './notesSlice'
import { NoteEditor } from './NoteEditor/NoteEditor'

export const NotesView = () => {
  const dispatch = useDispatch()
  const notes = useSelector(selectNotesList)
  const selectedNoteId = useSelector(selectSelectedNoteId)
  const selectedNote = useSelector(selectSelectedNote)
  const [editMode, setEditMode] = useState(false)

  const handleAddNote = () => {
    dispatch(addNote())
  }

  const handleSelectNote = (id: Note['id']) => {
    dispatch(selectNote(id))
  }

  const handleDeleteNote = (id: Note['id']) => {
    dispatch(deleteNote(id))
  }

  const handleEditModeToggle = () => setEditMode(mode => !mode)

  const handleEditorChange = (note: Partial<Omit<Note, 'id'>>) => {
    if (selectedNoteId !== undefined) {
      dispatch(updateNote(selectedNoteId, note))
    }
  }

  return (
    <div data-testid={TEST_ID_NOTES_VIEW}>
      {selectedNote && (
        <NoteEditor
          note={selectedNote}
          editMode={editMode}
          onEditModeToggle={handleEditModeToggle}
          onChange={handleEditorChange}
        />
      )}
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
