import { Note } from 'Notes/notesSlice'
import React from 'react'
import { TEST_ID_NOTE_EDITOR } from 'testIdentifiers'
import { NoteTitle } from './NoteTitle/NoteTitle'

type NoteEditorProps = {
  note: Omit<Note, 'id'>
  editMode?: boolean
  onChange?(note: Omit<Note, 'id'>): void
  onEditModeToggle?(): void
}

export const NoteEditor = (props: NoteEditorProps) => {
  const handleChange = (type: 'title' | 'body') => (value: string) => {
    if (props.onChange) props.onChange({ ...props.note, [type]: value })
  }

  const handleEditModeToggle = () => {
    if (props.onEditModeToggle) props.onEditModeToggle()
  }

  return (
    <div data-testid={TEST_ID_NOTE_EDITOR}>
      <button type="button" onClick={handleEditModeToggle}>
        {props.editMode ? 'View' : 'Edit'}
      </button>
      <NoteTitle
        title={props.note.title}
        editMode={props.editMode}
        onChange={handleChange('title')}
      />
    </div>
  )
}
