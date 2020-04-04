import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { NotesListItem } from './NotesListItem'

const setup = (selected = false) => {
  const note = { id: 0, title: 'test-title', body: 'test body' }
  const handleSelect = jest.fn()
  const handleDelete = jest.fn()
  const utils = render(
    <NotesListItem
      {...note}
      selected={selected}
      onSelect={handleSelect}
      onDelete={handleDelete}
    />,
  )
  return { ...utils, note, handleSelect, handleDelete }
}

describe('NotesListItem', () => {
  it('should render the given title', () => {
    const { getByText, note } = setup()
    expect(getByText(note.title)).toBeInTheDocument()
  })

  it('should render the given body', () => {
    const { getByText, note } = setup()
    expect(getByText(note.body)).toBeInTheDocument()
  })

  it('should render text bold if selected', () => {
    const { getByRole } = setup(true)
    expect(getByRole('menuitem').style).toHaveProperty('font-weight', 'bolder')
  })

  it('should call the select note function on click', () => {
    const { getByRole, handleSelect } = setup()
    userEvent.click(getByRole('menuitem'))
    expect(handleSelect).toHaveBeenCalled()
  })

  it("should call the select note function with the note's id", () => {
    const { getByRole, note, handleSelect } = setup()
    userEvent.click(getByRole('menuitem'))
    expect(handleSelect).toHaveBeenCalledWith(note.id)
  })

  it('should call the delete note function on delete button click', () => {
    const { getByText, handleDelete } = setup()
    userEvent.click(getByText('Delete'))
    expect(handleDelete).toHaveBeenCalled()
  })

  it("should call the delete note function with the note's id", () => {
    const { getByText, note, handleDelete } = setup()
    userEvent.click(getByText('Delete'))
    expect(handleDelete).toHaveBeenCalledWith(note.id)
  })

  it('should not call the select note function if delete button is clicked', () => {
    const { getByText, handleSelect } = setup()
    userEvent.click(getByText('Delete'))
    expect(handleSelect).not.toHaveBeenCalled()
  })
})
