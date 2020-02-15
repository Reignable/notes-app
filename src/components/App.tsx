import React from 'react'
import { NotesProvider } from 'state/notes/NotesProvider'
import { PreNotes } from 'components/PreNotes'
import { AddNote } from 'components/AddNote'
import { DeleteNote } from 'components/DeleteNote'

export const App = () => (
  <NotesProvider>
    <PreNotes />
    <AddNote />
    <DeleteNote />
  </NotesProvider>
)
