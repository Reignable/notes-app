import React from 'react'
import { OutlinedInput } from '@material-ui/core'

interface NoteTextAreaProps {
  value?: string
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const NoteTextArea = ({ value = '', onChange }: NoteTextAreaProps) => {
  return (
    <OutlinedInput
      onChange={onChange}
      fullWidth
      multiline
      rowsMin={3}
      rows={5}
      rowsMax={35}
      value={value}
    />
  )
}
