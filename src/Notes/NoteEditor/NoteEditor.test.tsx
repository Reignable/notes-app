import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { NoteEditor } from './NoteEditor'

describe('NoteEditor', () => {
  it('should render the note title', () => {
    const note = { id: 0, title: 'Test title', body: 'Test body' }
    const { getByText } = render(<NoteEditor note={note} />)
    expect(getByText(note.title)).toBeInTheDocument()
  })

  it('should render an input for the title when in edit mode', () => {
    const note = { id: 0, title: 'Test title', body: 'Test body' }
    const { getByLabelText } = render(<NoteEditor note={note} editMode />)
    expect(getByLabelText('Title')).toBeInTheDocument()
  })

  it('should call the on change function when the title text changes', () => {
    const note = { id: 0, title: 'Test title', body: 'Test body' }
    const handleChange = jest.fn()
    const { getByLabelText } = render(
      <NoteEditor note={note} editMode onChange={handleChange} />,
    )
    userEvent.type(getByLabelText('Title'), 'New title')
    expect(handleChange).toHaveBeenCalled()
  })

  it('should call the on change function with the new title when the title changes', () => {
    const note = { title: 'Test title', body: 'Test body' }
    const handleChange = jest.fn()
    const newTitle = 'New title'
    const { getByLabelText } = render(
      <NoteEditor note={note} editMode onChange={handleChange} />,
    )
    userEvent.type(getByLabelText('Title'), newTitle)
    expect(handleChange).toHaveBeenLastCalledWith({
      title: newTitle,
      body: note.body,
    })
  })
})
