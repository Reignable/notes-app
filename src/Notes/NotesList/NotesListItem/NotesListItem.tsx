import { Note, selectNote } from 'Notes/notesSlice'
import React from 'react'
import {
  TEST_ID_NOTES_LIST_ITEM,
  TEST_ID_NOTES_LIST_ITEM_BODY,
  TEST_ID_NOTES_LIST_ITEM_TITLE,
} from 'testIdentifiers'
import { useDispatch } from 'react-redux'

type NotesListItemProps = Note & { selected?: boolean }

export const NotesListItem = (props: NotesListItemProps) => {
  const dispatch = useDispatch()

  const handleSelectNote = () => {
    dispatch(selectNote(props.id))
  }

  return (
    <li
      role="menuitem"
      style={{ fontWeight: props.selected ? 'bolder' : 'normal' }}
      onClick={handleSelectNote}
      onKeyUp={handleSelectNote}
      data-testid={`${TEST_ID_NOTES_LIST_ITEM}-${props.id}`}
    >
      <p data-testid={`${TEST_ID_NOTES_LIST_ITEM_TITLE}-${props.id}`}>
        {props.title}
      </p>
      <p data-testid={`${TEST_ID_NOTES_LIST_ITEM_BODY}-${props.id}`}>
        {props.body}
      </p>
    </li>
  )
}
