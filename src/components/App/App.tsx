import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { notesService } from '../../services/NotesService'
import { HasNotes } from '../HasNotes/HasNotes'
import { NoNotes } from '../NoNotes/NoNotes'

const App = () => {
  const [notes, setNotes] = useState()

  const updateNotes = () => {
    notesService.getNotes().then(response => setNotes(response))
  }

  useEffect(() => {
    updateNotes()
  }, [])

  return (
    <Router>
      {notes === undefined || notes.length === 0 ? (
        <Route>
          <NoNotes onNoteAdded={updateNotes} />
        </Route>
      ) : (
        <HasNotes notes={notes} onNotesChange={updateNotes} />
      )}
    </Router>
  )
}

export default App
