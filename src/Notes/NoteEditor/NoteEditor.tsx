import React from 'react'
import { Note } from 'Notes/notesSlice'
import { NoteTitle } from './NoteTitle/NoteTitle'

type NoteEditorProps = {
  note: Omit<Note, 'id'>
  editMode?: boolean
  onChange?(note: Omit<Note, 'id'>): void
}

export const NoteEditor = (props: NoteEditorProps) => {
  const handleChange = (type: 'title' | 'body') => (value: string) => {
    if (props.onChange) props.onChange({ ...props.note, [type]: value })
  }

  return (
    <>
      <NoteTitle
        title={props.note.title}
        editMode={props.editMode}
        onChange={handleChange('title')}
      />
    </>
  )
}
