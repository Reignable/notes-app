import { wait } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import React from 'react'
import {
  TEST_ID_ADD_NOTE_BUTTON,
  TEST_ID_NOTES_LIST,
  TEST_ID_NOTES_VIEW,
  TEST_ID_NOTE_EDITOR,
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

  it('should remove a note when the delete button is clicked', () => {
    const initialState = {
      notes: {
        list: [
          { id: 0, body: 'Note body', title: 'Note title' },
          { id: 1, body: 'Note body', title: 'Note title' },
        ],
      },
    }
    const { getAllByText, getAllByRole } = renderWithRedux(
      <NotesView />,
      initialState,
    )
    userEvent.click(getAllByText('Delete')[0])
    expect(getAllByRole('menuitem')).toHaveLength(
      initialState.notes.list.length - 1,
    )
  })

  it('should not render the editor if no note is selected', () => {
    const initialState = {
      notes: {
        list: [{ id: 0, body: 'Note 0 body', title: 'Note 0 title' }],
      },
    }
    const { queryByTestId } = renderWithRedux(<NotesView />, initialState)
    expect(queryByTestId(TEST_ID_NOTE_EDITOR)).not.toBeInTheDocument()
  })

  it('should render the editor if a note is selected', () => {
    const initialState = {
      notes: {
        list: [{ id: 0, body: 'Note 0 body', title: 'Note 0 title' }],
        selected: 0,
      },
    }
    const { getByTestId } = renderWithRedux(<NotesView />, initialState)
    expect(getByTestId(TEST_ID_NOTE_EDITOR)).toBeInTheDocument()
  })

  it('should set the editor into edit mode when the edit button is clicked', () => {
    const initialState = {
      notes: {
        list: [{ id: 0, body: 'Note 0 body', title: 'Note 0 title' }],
        selected: 0,
      },
    }
    const { getByText, getByLabelText } = renderWithRedux(
      <NotesView />,
      initialState,
    )
    userEvent.click(getByText('Edit'))
    expect(getByLabelText('Title')).toBeInTheDocument()
  })

  it('should set the editor into view mode when the view button is clicked', () => {
    const initialState = {
      notes: {
        list: [{ id: 0, body: 'Note 0 body', title: 'Note 0 title' }],
        selected: 0,
      },
    }
    const { getByText, getByLabelText, queryByLabelText } = renderWithRedux(
      <NotesView />,
      initialState,
    )
    userEvent.click(getByText('Edit'))
    expect(getByLabelText('Title')).toBeInTheDocument()
    userEvent.click(getByText('View'))
    expect(queryByLabelText('Title')).not.toBeInTheDocument()
  })

  it('should update a note title when the title input is changed', async () => {
    const initialState = {
      notes: {
        list: [{ id: 0, body: 'Note 0 body', title: 'Note 0 title' }],
        selected: 0,
      },
    }
    const newTitle = 'New title'
    const { getByText, getByLabelText, store } = renderWithRedux(
      <NotesView />,
      initialState,
    )
    userEvent.click(getByText('Edit'))
    userEvent.type(getByLabelText('Title'), newTitle)
    await wait(() => {
      expect(
        store
          .getState()
          .notes.list.find(({ id }) => id === initialState.notes.selected)
          ?.title,
      ).toBe(newTitle)
    })
  })
})
