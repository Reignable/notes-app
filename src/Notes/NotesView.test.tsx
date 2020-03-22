import React from 'react'
import {
  TEST_ID_ADD_NOTE_BUTTON,
  TEST_ID_NOTES_LIST,
  TEST_ID_NOTES_VIEW,
} from 'testIdentifiers'
import { renderWithRedux } from 'utils/testing/renderWithRedux'
import { NotesView } from './NotesView'

describe('NotesView', () => {
  it('should have a root element', () => {
    const { getByTestId } = renderWithRedux(<NotesView />)
    expect(getByTestId(TEST_ID_NOTES_VIEW)).toBeInTheDocument()
  })

  it('should show an add note button', () => {
    const { getByTestId } = renderWithRedux(<NotesView />)
    expect(getByTestId(TEST_ID_ADD_NOTE_BUTTON)).toBeInTheDocument()
  })

  it('should show a notes list', () => {
    const { getByTestId } = renderWithRedux(<NotesView />)
    expect(getByTestId(TEST_ID_NOTES_LIST)).toBeInTheDocument()
  })
})
