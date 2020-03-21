import { render } from '@testing-library/react'
import React from 'react'
import {
  TEST_ID_NOTES_LIST_ITEM_TITLE,
  TEST_ID_NOTES_LIST_ITEM_BODY,
  TEST_ID_NOTES_LIST_ITEM,
} from 'testIdentifiers'
import { NotesListItem } from './NotesListItem'

describe('NotesListItem', () => {
  it('should have a title and body element', () => {
    const note = { id: 0, title: 'test-title', body: 'test body' }
    const { getByTestId } = render(<NotesListItem {...note} />)
    expect(
      getByTestId(`${TEST_ID_NOTES_LIST_ITEM}-${note.id}`).children,
    ).toHaveLength(2)
  })

  it('should display the provided title', () => {
    const note = { id: 0, title: 'test-title', body: 'test body' }
    const { getByTestId } = render(<NotesListItem {...note} />)
    expect(getByTestId(TEST_ID_NOTES_LIST_ITEM_TITLE)).toHaveTextContent(
      note.title,
    )
  })

  it('should display the provided body', () => {
    const note = { id: 0, title: 'test-title', body: 'test body' }
    const { getByTestId } = render(<NotesListItem {...note} />)
    expect(getByTestId(TEST_ID_NOTES_LIST_ITEM_BODY)).toHaveTextContent(
      note.body,
    )
  })
})
