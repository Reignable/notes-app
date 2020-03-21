import React from 'react'
import { useDispatch } from 'react-redux'
import { addNote } from 'Notes/notesSlice'

export const AddNoteButton = () => {
  const dispatch = useDispatch()

  return (
    <button
      type="button"
      onClick={() => dispatch(addNote())}
      data-testid="add-note-button"
    >
      Add Note
    </button>
  )
}
