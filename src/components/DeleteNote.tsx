import React from 'react'
import { useNotes } from 'state/notes/useNotes'
import { notesService } from 'services/NotesService'

export const DeleteNote = () => {
  const { notes, deleteNote } = useNotes()
  const handleClick = () => {
    notesService.deleteNote(notes[notes.length - 1].id).then(() => deleteNote())
  }
  return (
    <button type="button" onClick={handleClick}>
      Delete
    </button>
  )
}
