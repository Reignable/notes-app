import { Note } from 'Notes/notesSlice'
import React from 'react'

type NotesListItemProps = Note & {
  selected?: boolean
  onSelect?(id: Note['id']): void
  onDelete?(id: Note['id']): void
}

export const NotesListItem = (props: NotesListItemProps) => {
  const handleSelectNote = () => {
    if (props.onSelect) props.onSelect(props.id)
  }

  const handleDeleteNote = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    if (props.onDelete) props.onDelete(props.id)
  }

  return (
    <li
      role="menuitem"
      style={{ fontWeight: props.selected ? 'bolder' : 'normal' }}
      onClick={handleSelectNote}
      onKeyUp={handleSelectNote}
    >
      <p>{props.title}</p>
      <p>{props.body}</p>
      <button type="button" onClick={handleDeleteNote}>
        Delete
      </button>
    </li>
  )
}
