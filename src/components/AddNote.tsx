import React from 'react'
import { useNotes } from 'state/notes/useNotes'
import { notesService } from 'services/NotesService'

export const AddNote = () => {
  const { addNote } = useNotes()
  const handleClick = () => {
    notesService.addNote().then(newNote => addNote(newNote))
  }
  return (
    <button type="button" onClick={handleClick}>
      Add Note
    </button>
  )
}
