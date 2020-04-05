import { action } from '@storybook/addon-actions'
import React from 'react'
import { NoteEditor } from './NoteEditor'

export default { title: 'Notes/Note Editor' }

export const WithTitle = () => (
  <NoteEditor note={{ title: 'Note title', body: '' }} />
)

export const WithBody = () => (
  <NoteEditor note={{ title: '', body: 'Note body' }} />
)

export const WithTitleAndBody = () => (
  <NoteEditor note={{ title: 'Note title', body: 'Note body' }} />
)

export const EditMode = () => (
  <NoteEditor
    note={{ title: 'Note title', body: 'enter text here' }}
    editMode
    onChange={action('onChange')}
  />
)
