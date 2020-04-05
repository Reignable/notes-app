import React from 'react'

type NoteBodyProps = {
  body: string
  editMode?: boolean
  onChange?(body: string): void
}

export const NoteBody = (props: NoteBodyProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (props.onChange) props.onChange(event.target.value)
  }

  return (
    <>
      {props.editMode ? (
        <label htmlFor="note-body">
          Body
          <textarea id="note-body" value={props.body} onChange={handleChange} />
        </label>
      ) : (
        <p>{props.body}</p>
      )}
    </>
  )
}
