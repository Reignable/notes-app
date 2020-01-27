import {
  Container,
  Typography,
  OutlinedInput,
  CircularProgress,
  Box,
} from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Note } from '../../model/Note'
import { notesService } from '../../services/NotesService'
import { formatViewDate } from './formatDate'

export const NoteView = () => {
  const { selectedNoteId } = useParams<{ selectedNoteId: string | undefined }>()
  const [note, setNote] = useState<Note>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    notesService.getNote(selectedNoteId).then(data => {
      setNote(data)
    })
  }, [selectedNoteId])

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setLoading(true)
    const {
      target: { value },
    } = event
    notesService
      .updateNote(selectedNoteId, { ...note, body: value })
      .then(data => setNote(data))
      .finally(() => setLoading(false))
  }

  return (
    <Container>
      <Typography variant="caption" paragraph>
        {note && `Last edited: ${formatViewDate(note.lastEdited)}`}
      </Typography>
      <Box display="flex" justifyContent="space-between">
        <Typography component="h2" variant="h4">
          {note?.title}
        </Typography>
        {loading && <CircularProgress size="1.5rem" />}
      </Box>
      <OutlinedInput
        onChange={handleTextAreaChange}
        fullWidth
        multiline
        rowsMin={3}
        rowsMax={50}
        value={note?.body}
      />
    </Container>
  )
}
