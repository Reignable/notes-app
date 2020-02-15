import React from 'react'
import { useNotes } from 'state/notes/useNotes'

export const PreNotes = () => {
  const { notes, hasNotes } = useNotes()
  return hasNotes ? (
    <pre>{JSON.stringify(notes, null, 2)}</pre>
  ) : (
    <p>No Notes</p>
  )
}
