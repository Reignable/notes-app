import React from 'react'
import { useDispatch } from 'react-redux'
import { addNote } from 'Notes/notesSlice'
import { TEST_ID_ADD_NOTE_BUTTON } from 'testIdentifiers'

export const AddNoteButton = () => {
  const dispatch = useDispatch()

  return (
    <button
      type="button"
      onClick={() => dispatch(addNote())}
      data-testid={TEST_ID_ADD_NOTE_BUTTON}
    >
      Add Note
    </button>
  )
}
