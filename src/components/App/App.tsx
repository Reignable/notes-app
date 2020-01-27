import { Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { notesService } from '../../services/NotesService'
import { NotesList } from '../NotesList/NotesList'
import { NoteView } from '../NoteView/NoteView'

const App = () => {
  const [notes, setNotes] = useState()

  useEffect(() => {
    notesService.getNotes().then(response => setNotes(response))
  }, [])

  return (
    <Router>
      <Grid container>
        <Grid item xs={3}>
          <Route path="/" exact>
            <NotesList notes={notes} />
          </Route>
          <Route path="/:selectedNoteId">
            <NotesList notes={notes} />
          </Route>
        </Grid>
        <Grid item xs>
          <Route path="/:selectedNoteId">
            <NoteView />
          </Route>
        </Grid>
      </Grid>
    </Router>
  )
}

export default App
