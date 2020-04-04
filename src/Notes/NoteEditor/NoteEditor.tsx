import React from 'react'
import { Note } from 'Notes/notesSlice'
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
    <>
      <button type="button" onClick={handleEditModeToggle}>
        {props.editMode ? 'View' : 'Edit'}
      </button>
      <NoteTitle
        title={props.note.title}
        editMode={props.editMode}
        onChange={handleChange('title')}
      />
    </>
  )
}
