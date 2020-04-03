import userEvent from '@testing-library/user-event'
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

  it('should add a note to the list when the button is clicked', () => {
    const { getByTestId, store } = renderWithRedux(<NotesView />)
    userEvent.click(getByTestId(TEST_ID_ADD_NOTE_BUTTON))
    expect(store.getState().notes.list).toHaveLength(1)
  })

  it('should set a note item to selected on click', () => {
    const initialState = {
      notes: { list: [{ id: 0, body: 'Note body', title: 'Note title' }] },
    }
    const { getByText, store } = renderWithRedux(<NotesView />, initialState)
    userEvent.click(getByText('Note title'))
    expect(store.getState().notes.selected).toBe(initialState.notes.list[0].id)
  })
})
