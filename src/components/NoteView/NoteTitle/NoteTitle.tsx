import {
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check'
import EditIcon from '@material-ui/icons/Edit'
import React, { useState } from 'react'

interface NoteTitleProps {
  value?: string
}
export const NoteTitle = (props: NoteTitleProps) => {
  const [hoveringTitle, setHoveringTitle] = useState(false)
  const [editingTitle, setEditingTitle] = useState(false)

  if (editingTitle) {
    return (
      <TextField
        variant="outlined"
        value={props.value}
        size="small"
        label="Edit title"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setEditingTitle(false)}>
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
