import { Grid, Button, Box, Paper, Container } from '@material-ui/core'
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
            <Button fullWidth color="primary" variant="contained">
              New Note
            </Button>
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
            <Container
              component={Paper}
              style={{ height: '100%', maxHeight: '100%' }}
            >
              <Box py={3}>
                <NoteView />
              </Box>
            </Container>
          </Route>
        </Grid>
      </Grid>
    </Router>
  )
}

export default App
