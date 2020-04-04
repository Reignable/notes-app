import React from 'react'

type NoteTitleProps = {
  title: string
  editMode?: boolean
  onChange?(title: string): void
}

export const NoteTitle = (props: NoteTitleProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) props.onChange(event.target.value)
  }

  return (
    <>
      {props.editMode ? (
        <>
          <label htmlFor="note-title">
            Title
            <input
              type="text"
              id="note-title"
              value={props.title}
              onChange={handleChange}
            />
          </label>
        </>
      ) : (
        <h1>{props.title}</h1>
      )}
    </>
  )
}
