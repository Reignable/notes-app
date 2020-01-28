import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { formatListDate } from './formatListDate'
import { DeleteNoteButton } from './DeleteNoteButton/DeleteNoteButton'

interface NotesListItemProps {
  lastEdited: string
  title: string
  selected?: boolean
  id: string | number
  onDelete: (id: string | number) => void
}

export const NotesListItem = (props: NotesListItemProps) => (
  <ListItem
    component={Link}
    to={`/${props.id}`}
    selected={props.selected}
    button
  >
    <ListItemText
      primary={props.title}
      secondary={formatListDate(props.lastEdited)}
    />
    <ListItemSecondaryAction>
      <DeleteNoteButton onClick={() => props.onDelete(props.id)} />
    </ListItemSecondaryAction>
  </ListItem>
)
