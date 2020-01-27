import { Container, Typography, OutlinedInput } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Note } from '../../model/Note'
import { notesService } from '../../services/NotesService'
import { formatViewDate } from './formatDate'

export const NoteView = () => {
  const { selectedNoteId } = useParams<{ selectedNoteId: string | undefined }>()
  const [note, setNote] = useState<Note>()
  const [noteBody, setNoteBody] = useState()

  useEffect(() => {
    notesService.getNote(selectedNoteId).then(data => {
      setNote(data)
    })
  }, [selectedNoteId])

  useEffect(() => {
    setNoteBody(note?.body || '')
  }, [note])

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const {
      target: { value },
    } = event
    setNoteBody(value)
    notesService
      .updateNote(selectedNoteId, { ...note, body: value })
      .then(data => setNote(data))
      .finally(() => console.log('UPDATED', selectedNoteId))
  }

  return (
    <Container>
      <Typography variant="caption" paragraph>
        {note && `Last edited: ${formatViewDate(note.lastEdited)}`}
      </Typography>
      <Typography component="h2" variant="h4">
        {note?.title}
      </Typography>
      <OutlinedInput
        onChange={handleTextAreaChange}
        fullWidth
        multiline
        rowsMin={3}
        rowsMax={50}
        value={noteBody}
      />
    </Container>
  )
}
