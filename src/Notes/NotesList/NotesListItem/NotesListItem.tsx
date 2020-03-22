import { Note } from 'Notes/notesSlice'
import React from 'react'
import {
  TEST_ID_NOTES_LIST_ITEM,
  TEST_ID_NOTES_LIST_ITEM_BODY,
  TEST_ID_NOTES_LIST_ITEM_TITLE,
} from 'testIdentifiers'

type NotesListItemProps = Note

export const NotesListItem = (props: NotesListItemProps) => (
  <li data-testid={`${TEST_ID_NOTES_LIST_ITEM}-${props.id}`}>
    <p data-testid={`${TEST_ID_NOTES_LIST_ITEM_TITLE}-${props.id}`}>
      {props.title}
    </p>
    <p data-testid={`${TEST_ID_NOTES_LIST_ITEM_BODY}-${props.id}`}>
      {props.body}
    </p>
  </li>
)
