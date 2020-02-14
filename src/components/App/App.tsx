import React from 'react'
import { NotesProvider } from 'state/notes/NotesProvider'
import { Deeper } from 'components/Deeper/Deeper'
import { AddNote } from 'components/AddNote'
import { DeleteNote } from 'components/DeleteNote'

export const App = () => (
  <NotesProvider>
    <Deeper />
    <AddNote />
    <DeleteNote />
  </NotesProvider>
)
