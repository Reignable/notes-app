import React from 'react'
import { action } from '@storybook/addon-actions'
import { NoteTitle } from './NoteTitle'

export default { title: 'Notes/Note Title' }

export const WithTitle = () => <NoteTitle title="Note Title" />

export const EditMode = () => (
  <NoteTitle title="Note Title" editMode onChange={action('onChange')} />
)
