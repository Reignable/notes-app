import React from 'react'
import { OutlinedInput } from '@material-ui/core'

interface NoteTextAreaProps {
  value: string
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const NoteTextArea = (props: NoteTextAreaProps) => {
  return (
    <OutlinedInput
      onChange={props.onChange}
      fullWidth
      multiline
      rowsMin={3}
      rowsMax={50}
      value={props.value}
    />
  )
}
