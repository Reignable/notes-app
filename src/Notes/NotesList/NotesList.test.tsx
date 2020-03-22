import React from 'react'
import { renderWithRedux } from 'utils/testing/renderWithRedux'
import { NotesList } from './NotesList'

describe('NotesList', () => {
  it('should render the provided notes', () => {
    const notes = [{ id: 0, title: 'note 1', body: 'this is note 1 body' }]
    const { getByRole } = renderWithRedux(<NotesList notes={notes} />)
    expect(getByRole('menuitem')).toBeInTheDocument()
  })

  it('should render all notes in the notes array', () => {
    const notes = [
      { id: 0, title: 'note 1', body: 'this is note 1 body' },
      { id: 1, title: 'note 2', body: 'this is note 2 body' },
    ]
    const { getAllByTestId } = renderWithRedux(<NotesList notes={notes} />)
    const items = getAllByTestId(/notes-list-item-\d*$/)
    expect(items).toHaveLength(notes.length)
  })
})
