import { ListItem, ListItemText } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { formatListDate } from './formatListDate'

interface NotesListItemProps {
  lastEdited: string
  title: string
  selected?: boolean
  id: string | number
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
  </ListItem>
)
