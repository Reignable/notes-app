import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import {
  TEST_ID_NOTES_LIST_ITEM,
  TEST_ID_NOTES_LIST_ITEM_BODY,
  TEST_ID_NOTES_LIST_ITEM_TITLE,
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
    expect(
      getByTestId(TEST_ID_NOTES_LIST_ITEM_TITLE, { exact: false }),
    ).toHaveTextContent(note.title)
  })

  it('should display the provided body', () => {
    const note = { id: 0, title: 'test-title', body: 'test body' }
    const { getByTestId } = render(<NotesListItem {...note} />)
    expect(
      getByTestId(TEST_ID_NOTES_LIST_ITEM_BODY, { exact: false }),
    ).toHaveTextContent(note.body)
  })

  it('should render text bold if selected', () => {
    const note = { id: 0, title: 'test-title', body: 'test body' }
    const { getByTestId } = render(<NotesListItem {...note} selected />)
    expect(
      getByTestId(`${TEST_ID_NOTES_LIST_ITEM}-${note.id}`),
    ).toMatchSnapshot()
  })

  it('should call the select note function on click', () => {
    const note = { id: 0, title: 'test-title', body: 'test body' }
    const handleSelect = jest.fn()
    const { getByTestId } = render(
      <NotesListItem {...note} onSelect={handleSelect} />,
    )
    userEvent.click(getByTestId(`${TEST_ID_NOTES_LIST_ITEM}-${note.id}`))
    expect(handleSelect).toHaveBeenCalled()
  })

  it("should call the select note function with the note's id", () => {
    const note = { id: 0, title: 'test-title', body: 'test body' }
    const handleSelect = jest.fn()
    const { getByTestId } = render(
      <NotesListItem {...note} onSelect={handleSelect} />,
    )
    userEvent.click(getByTestId(`${TEST_ID_NOTES_LIST_ITEM}-${note.id}`))
    expect(handleSelect).toHaveBeenCalledWith(note.id)
  })
})
