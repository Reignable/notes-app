import { action } from '@storybook/addon-actions'
import React from 'react'
import { NotesListItem } from './NotesListItem'

const note = { id: 0, title: 'Test note', body: 'Test note body' }

export default { title: 'Notes/Notes List Item' }

export const NotSelected = () => (
  <NotesListItem
    {...note}
    onDelete={action('onDelete')}
    onSelect={action('onSelect')}
  />
)
export const Selected = () => (
  <NotesListItem
    {...note}
    selected
    onDelete={action('onDelete')}
    onSelect={action('onSelect')}
  />
)
