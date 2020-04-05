import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { NoteEditor } from './NoteEditor'

const setup = (editMode = false) => {
  const note = { title: 'Test title', body: 'Test body' }
  const handleChange = jest.fn()
  const handleEditModeToggle = jest.fn()
  const utils = render(
    <NoteEditor
      note={note}
      editMode={editMode}
      onChange={handleChange}
      onEditModeToggle={handleEditModeToggle}
    />,
  )
  return { ...utils, note, handleChange, handleEditModeToggle }
}

describe('NoteEditor', () => {
  it('should render the note title', () => {
    const { getByText, note } = setup()
    expect(getByText(note.title)).toBeInTheDocument()
  })

  it('should render the note body', () => {
    const { getByText, note } = setup()
    expect(getByText(note.body)).toBeInTheDocument()
  })

  it('should render an input for the title when in edit mode', () => {
    const { getByLabelText } = setup(true)
    expect(getByLabelText('Title')).toBeInTheDocument()
  })

  it('should render an input for the body when in edit mode', () => {
    const { getByLabelText } = setup(true)
    expect(getByLabelText('Body')).toBeInTheDocument()
  })

  it('should call the on change function when the title text changes', () => {
    const { getByLabelText, handleChange } = setup(true)
    userEvent.type(getByLabelText('Title'), 'New title')
    expect(handleChange).toHaveBeenCalled()
  })

  it('should call the on change function with the new title when the title changes', () => {
    const newTitle = 'New title'
    const { getByLabelText, handleChange, note } = setup(true)
    userEvent.type(getByLabelText('Title'), newTitle)
    expect(handleChange).toHaveBeenLastCalledWith({
      title: newTitle,
      body: note.body,
    })
  })

  it('should call the onChange function when the body text changes', () => {
    const { getByLabelText, handleChange } = setup(true)
    userEvent.type(getByLabelText('Body'), 'New body')
    expect(handleChange).toHaveBeenCalled()
  })

  it('should call the onChange function with the new body when the body changes', () => {
    const newBody = 'New body'
    const { getByLabelText, handleChange, note } = setup(true)
    userEvent.type(getByLabelText('Body'), newBody)
    expect(handleChange).toHaveBeenLastCalledWith({
      title: note.title,
      body: newBody,
    })
  })

  it('should render a button saying "Edit" when not in edit mode', () => {
    const { getByText } = setup()
    expect(getByText('Edit')).toBeInTheDocument()
  })

  it('should render a button saying "View" when in edit mode', () => {
    const { getByText } = setup(true)
    expect(getByText('View')).toBeInTheDocument()
  })

  it('should call the toggle edit mode function when the button saying "Edit" is clicked', () => {
    const { getByText, handleEditModeToggle } = setup()
    userEvent.click(getByText('Edit'))
    expect(handleEditModeToggle).toHaveBeenCalled()
  })

  it('should call the toggle edit mode function when the button saying "View" is clicked', () => {
    const { getByText, handleEditModeToggle } = setup(true)
    userEvent.click(getByText('View'))
    expect(handleEditModeToggle).toHaveBeenCalled()
  })
})
