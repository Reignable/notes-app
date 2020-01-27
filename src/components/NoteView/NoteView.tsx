import { Box, Container, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Note } from '../../model/Note'
import { notesService } from '../../services/NotesService'
import { formatViewDate } from './formatDate'
import { NoteTextArea } from './NoteTextArea/NoteTextArea'
import { NoteTitle } from './NoteTitle/NoteTitle'

export const NoteView = () => {
  const { selectedNoteId } = useParams<{ selectedNoteId: string | undefined }>()
  const [note, setNote] = useState<Note>()

  useEffect(() => {
    notesService.getNote(selectedNoteId).then(data => {
      setNote(data)
    })
  }, [selectedNoteId])

  const handleChange = (newData: { title?: string; body?: string }) => {
    if (note) {
      notesService
        .updateNote({ ...note, ...newData })
        .then(response => setNote(response))
    }
  }

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    handleChange({ body: event.target.value })
  }

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange({ title: event.target.value })
  }

  return (
    <Container>
      <Typography variant="caption">
        {note && `Last edited: ${formatViewDate(note.lastEdited)}`}
      </Typography>
      <Box display="flex" justifyContent="space-between" mt={3} mb={3}>
        <NoteTitle value={note?.title} onChange={handleTitleChange} />
      </Box>
      <NoteTextArea onChange={handleTextAreaChange} value={note?.body} />
    </Container>
  )
}
