import userEvent from '@testing-library/user-event'
import React from 'react'
import { renderWithRedux } from 'utils/testing/renderWithRedux'
import { AddNoteButton } from './AddNoteButton'

describe('AddNoteButton', () => {
  it('Should say "Add Note"', () => {
    const { getByTestId } = renderWithRedux(<AddNoteButton />)
    expect(getByTestId('add-note-button')).toHaveTextContent('Add Note')
  })

  it('should add a note to the store on click', () => {
    const { getByTestId, store } = renderWithRedux(<AddNoteButton />)
    userEvent.click(getByTestId('add-note-button'))
    expect(store.getState().notes).toHaveLength(1)
  })
})
