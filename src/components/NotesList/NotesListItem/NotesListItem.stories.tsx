import React from 'react'
import { NotesListItem } from './NotesListItem'

export default {
  title: 'Notes List/Notes List Item',
  component: NotesListItem,
}

export const WithTitle = () => <NotesListItem title="A Note" />

export const WithBody = () => (
  <NotesListItem title="A Note" body="With a body" />
)

WithBody.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/1nSacmEhxu7hI0gVY9Aj5M/Notes-List?node-id=2%3A15',
    },
  },
}
