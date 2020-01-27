import { Container, Typography, OutlinedInput } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Note } from '../../model/Note'
import { notesService } from '../../services/NotesService'
import { formatViewDate } from './formatDate'

export const NoteView = () => {
  const { selectedNoteId } = useParams<{ selectedNoteId: string | undefined }>()
  const [note, setNote] = useState<Note>()
  const [noteBody, setNoteBody] = useState(note?.body)

  useEffect(() => {
    notesService.getNote(selectedNoteId).then(data => {
      setNote(data)
      setNoteBody(data.body)
    })
  }, [selectedNoteId])

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setNoteBody(event.target.value)
  }

  return (
    <Container>
      <Typography variant="caption">
        {note && `Last edited: ${formatViewDate(note.lastEdited)}`}
      </Typography>
      <Typography variant="h4">{note?.title}</Typography>
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
