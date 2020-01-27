import { Box, CircularProgress, Container, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Note } from '../../model/Note'
import { notesService } from '../../services/NotesService'
import { formatViewDate } from './formatDate'
import { useDebounce } from '../../hooks/useDebounce'
import { NoteTextArea } from './NoteTextArea/NoteTextArea'
import { NoteTitle } from './NoteTitle/NoteTitle'

export const NoteView = () => {
  const { selectedNoteId } = useParams<{ selectedNoteId: string | undefined }>()
  const [note, setNote] = useState<Note>()
  const [noteBody, setNoteBody] = useState()
  const [loading, setLoading] = useState(false)

  const debouncedBody = useDebounce(noteBody, 500)

  useEffect(() => {
    if (debouncedBody && note) {
      notesService
        .updateNote(selectedNoteId, { ...note, body: debouncedBody })
        .then(data => {
          setNote(data)
        })
        .finally(() => setLoading(false))
    }
  }, [debouncedBody])

  useEffect(() => {
    notesService.getNote(selectedNoteId).then(data => {
      setNote(data)
      setNoteBody(data.body || '')
    })
  }, [selectedNoteId])

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setLoading(true)
    setNoteBody(event.target.value)
  }

  return (
    <Container>
      <Typography variant="caption">
        {note && `Last edited: ${formatViewDate(note.lastEdited)}`}
      </Typography>
      <Box display="flex" justifyContent="space-between" mt={3} mb={3}>
        <NoteTitle value={note?.title} />
        {loading && <CircularProgress size="1.5rem" />}
      </Box>
      <NoteTextArea onChange={handleTextAreaChange} value={noteBody} />
    </Container>
  )
}
