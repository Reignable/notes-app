import { action } from '@storybook/addon-actions'
import React from 'react'
import { NoteBody } from './NoteBody'

export default { title: 'Notes/Note Body' }

export const WithBody = () => <NoteBody body="This is the note body" />

export const EditMode = () => (
  <NoteBody
    body="This is the note body"
    editMode
    onChange={action('onChange')}
  />
)
