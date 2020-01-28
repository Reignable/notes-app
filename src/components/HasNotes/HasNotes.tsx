import { Box, Grid, Paper } from '@material-ui/core'
import React from 'react'
import { Route } from 'react-router-dom'
import NewNoteButton from '../NewNoteButton/NewNoteButton'
import NotesList from '../NotesList/NotesList'
import { NoteView } from '../NoteView/NoteView'
import { Note } from '../../model/Note'

interface HasNotesProps {
  notes: Note[]
  onNotesChange: () => void
}

export const HasNotes = (props: HasNotesProps) => (
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
        <NewNoteButton fullWidth onNoteAdded={props.onNotesChange} />
      </Box>
      <Paper elevation={4}>
        <Route path="/" exact>
          <NotesList notes={props.notes} onDeleteNote={props.onNotesChange} />
        </Route>
        <Route path="/:selectedNoteId">
          <NotesList notes={props.notes} onDeleteNote={props.onNotesChange} />
        </Route>
      </Paper>
    </Grid>
    <Grid item xs>
      <Route path="/:selectedNoteId">
        <Paper style={{ height: '100%', maxHeight: '100%' }}>
          <Box py={3}>
            <NoteView onConfirmTitle={props.onNotesChange} />
          </Box>
        </Paper>
      </Route>
    </Grid>
  </Grid>
)
