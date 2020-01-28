import {
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check'
import EditIcon from '@material-ui/icons/Edit'
import React, { useState, useEffect } from 'react'

interface NoteTitleProps {
  value: string
  onConfirm: (newTitle: string) => void
}
export const NoteTitle = (props: NoteTitleProps) => {
  const [hoveringTitle, setHoveringTitle] = useState(false)
  const [editingTitle, setEditingTitle] = useState(false)
  const [newTitle, setNewTitle] = useState(props.value)

  useEffect(() => {
    setNewTitle(props.value)
  }, [props.value])

  const handleConfirm = () => {
    setEditingTitle(false)
    props.onConfirm(newTitle)
  }

  if (editingTitle) {
    return (
      <TextField
        variant="outlined"
        value={newTitle}
        size="small"
        label="Edit title"
        onChange={e => setNewTitle(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleConfirm}>
                <CheckIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    )
  }
  return (
    <Typography
      style={{ cursor: 'pointer' }}
      variant="h4"
      onFocus={() => {}}
      onMouseOver={() => setHoveringTitle(true)}
      onMouseLeave={() => setHoveringTitle(false)}
      onClick={() => setEditingTitle(true)}
    >
      {props.value}
      {hoveringTitle && (
        <IconButton size="small">
          <EditIcon color="action" />
        </IconButton>
      )}
    </Typography>
  )
}
