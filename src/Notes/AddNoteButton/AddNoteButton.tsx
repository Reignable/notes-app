import React from 'react'
import { TEST_ID_ADD_NOTE_BUTTON } from 'testIdentifiers'

type AddNoteButtonProps = {
  onClick?(): void
}

export const AddNoteButton = ({ onClick }: AddNoteButtonProps) => (
  <button type="button" onClick={onClick} data-testid={TEST_ID_ADD_NOTE_BUTTON}>
    Add Note
  </button>
)
