import React from 'react'
import { OutlinedInput } from '@material-ui/core'

interface NoteTextAreaProps {
  value?: string
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const NoteTextArea = React.forwardRef<
  HTMLTextAreaElement,
  NoteTextAreaProps
>(({ value = '', onChange }: NoteTextAreaProps, ref) => {
  return (
    <OutlinedInput
      inputRef={ref}
      onChange={onChange}
      fullWidth
      multiline
      rowsMin={3}
      rows={5}
      rowsMax={35}
      value={value}
    />
  )
})
