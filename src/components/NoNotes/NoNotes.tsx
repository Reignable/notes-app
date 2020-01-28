import React from 'react'
import { Box, Typography } from '@material-ui/core'
import NewNoteButton from '../NewNoteButton/NewNoteButton'

interface NoNotesProps {
  onNoteAdded: () => void
}

export const NoNotes = (props: NoNotesProps) => (
  <Box display="flex" justifyContent="center" alignItems="center" pt="10%">
    <Box display="flex" flexDirection="column" alignContent="center">
      <Typography variant="h1">Take Note</Typography>
      <NewNoteButton onNoteAdded={props.onNoteAdded} />
    </Box>
  </Box>
)
