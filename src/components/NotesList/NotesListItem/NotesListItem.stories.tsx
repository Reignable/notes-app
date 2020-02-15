import React from 'react'
import { NotesListItem } from './NotesListItem'

export default { title: 'Notes List/Notes List Item', component: NotesListItem }

export const Default = () => <NotesListItem title="A Note" />

export const WithBody = () => (
  <NotesListItem title="A Note" body="With a body" />
)
