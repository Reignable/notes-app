import React from 'react'
import { Notes } from 'Notes/notesSlice'
import { NotesList } from './NotesList'

const notes: Notes = [
  { id: 0, title: 'Note 1', body: 'Note 1 body' },
  { id: 1, title: 'Note 2', body: 'Note 2 body' },
]

export default { title: 'Notes/Notes List' }

export const WithNotes = () => <NotesList notes={notes} />

export const WithSelected = () => <NotesList notes={notes} selectedNote={1} />
