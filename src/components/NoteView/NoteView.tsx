import { Box, Container, Typography } from '@material-ui/core'
import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { Note } from '../../model/Note'
import { notesService } from '../../services/NotesService'
import { formatViewDate } from './formatDate'
import { NoteTextArea } from './NoteTextArea/NoteTextArea'
import { NoteTitle } from './NoteTitle/NoteTitle'

interface NoteViewProps {
  onConfirmTitle: () => void
}

export const NoteView = (props: NoteViewProps) => {
  const { selectedNoteId } = useParams<{ selectedNoteId: string | undefined }>()
  const [note, setNote] = useState<Note>()
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textAreaRef.current) textAreaRef.current.focus()
    notesService.getNote(selectedNoteId).then(data => {
      setNote(data)
    })
  }, [selectedNoteId])

  const handleChange = (newData: { title?: string; body?: string }) => {
    if (note) {
      notesService
        .updateNote({ ...note, ...newData })
        .then(response => setNote(response))
        .finally(() => {
          if (newData.title) props.onConfirmTitle()
        })
    }
  }

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    handleChange({ body: event.target.value })
  }

  const handleTitleChange = (title: string) => {
    handleChange({ title })
  }

  return (
    <Container>
      <Typography variant="caption">
        {note && `Last edited: ${formatViewDate(note.lastEdited)}`}
      </Typography>
      <Box display="flex" justifyContent="space-between" mt={3} mb={3}>
        <NoteTitle value={note?.title || ''} onConfirm={handleTitleChange} />
      </Box>
      <NoteTextArea
        onChange={handleTextAreaChange}
        value={note?.body}
        ref={textAreaRef}
      />
    </Container>
  )
}
