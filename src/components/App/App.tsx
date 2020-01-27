import React, { useEffect, useState } from 'react'
import { notesService } from '../../services/NotesService'

const App = () => {
  const [notes, setNotes] = useState()

  useEffect(() => {
    notesService.getNotes().then(response => setNotes(response))
  }, [])

  return <div>{JSON.stringify(notes)}</div>
}

export default App
