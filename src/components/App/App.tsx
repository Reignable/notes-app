import { Grid, Box, Paper } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { notesService } from '../../services/NotesService'
import { NotesList } from '../NotesList/NotesList'
import { NoteView } from '../NoteView/NoteView'
import NewNoteButton from '../NewNoteButton/NewNoteButton'

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
      <Grid
        container
        spacing={3}
        style={{
          height: '99vh',
          maxHeight: '99vh',
          backgroundColor: '#F5F5F5',
        }}
      >
        <Grid item xs={3}>
          <Box py={3}>
            <NewNoteButton onNoteAdded={updateNotes} />
          </Box>
          <Paper elevation={4}>
            <Route path="/" exact>
              <NotesList notes={notes} />
            </Route>
            <Route path="/:selectedNoteId">
              <NotesList notes={notes} />
            </Route>
          </Paper>
        </Grid>
        <Grid item xs>
          <Route path="/:selectedNoteId">
            <Paper style={{ height: '100%', maxHeight: '100%' }}>
              <Box py={3}>
                <NoteView onConfirmTitle={updateNotes} />
              </Box>
            </Paper>
          </Route>
        </Grid>
      </Grid>
    </Router>
  )
}

export default App
