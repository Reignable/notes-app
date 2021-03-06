import { render } from '@testing-library/react'
import React from 'react'
import { NotesList } from './NotesList'

describe('NotesList', () => {
  it('should render the provided notes', () => {
    const notes = [{ id: 0, title: 'note 1', body: 'this is note 1 body' }]
    const { getByRole } = render(<NotesList notes={notes} />)
    expect(getByRole('menuitem')).toBeInTheDocument()
  })

  it('should render all notes in the notes array', () => {
    const notes = [
      { id: 0, title: 'note 1', body: 'this is note 1 body' },
      { id: 1, title: 'note 2', body: 'this is note 2 body' },
    ]
    const { getAllByRole } = render(<NotesList notes={notes} />)
    const items = getAllByRole('menuitem')
    expect(items).toHaveLength(notes.length)
  })
})
