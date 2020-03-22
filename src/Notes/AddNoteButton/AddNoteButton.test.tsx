import userEvent from '@testing-library/user-event'
import React from 'react'
import { TEST_ID_ADD_NOTE_BUTTON } from 'testIdentifiers'
import { renderWithRedux } from 'utils/testing/renderWithRedux'
import { AddNoteButton } from './AddNoteButton'

describe('AddNoteButton', () => {
  it('should say "Add Note"', () => {
    const { getByTestId } = renderWithRedux(<AddNoteButton />)
    expect(getByTestId(TEST_ID_ADD_NOTE_BUTTON)).toHaveTextContent('Add Note')
  })

  it('should add a note to the store on click', () => {
    const { getByTestId, store } = renderWithRedux(<AddNoteButton />)
    userEvent.click(getByTestId(TEST_ID_ADD_NOTE_BUTTON))
    expect(store.getState().notes.list).toHaveLength(1)
  })
})
