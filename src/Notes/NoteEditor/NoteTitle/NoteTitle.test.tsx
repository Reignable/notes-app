import { render } from '@testing-library/react'
import React from 'react'
import userEvent from '@testing-library/user-event'
import { NoteTitle } from './NoteTitle'

describe('NoteTitle', () => {
  it('should display the provided title string when not in edit mode', () => {
    const title = 'Test title'
    const { getByText } = render(<NoteTitle title={title} />)
    expect(getByText(title)).toBeInTheDocument()
  })

  it('should display an input box in edit mode', () => {
    const title = 'Test title'
    const { getByLabelText } = render(<NoteTitle title={title} editMode />)
    expect(getByLabelText('Title')).toBeInTheDocument()
  })

  it('should put the given title in the input box', () => {
    const title = 'Test title'
    const { getByLabelText } = render(<NoteTitle title={title} editMode />)
    expect(getByLabelText('Title')).toHaveProperty('value', title)
  })

  it('should call the onChange function when the input changes', () => {
    const title = 'Test title'
    const handleChange = jest.fn()
    const { getByLabelText } = render(
      <NoteTitle title={title} editMode onChange={handleChange} />,
    )
    userEvent.type(getByLabelText('Title'), 'New Note Title')
    expect(handleChange).toHaveBeenCalled()
  })

  it('should call the onChange function with the changed title', () => {
    const title = 'Test title'
    const newTitle = 'New note title'
    const handleChange = jest.fn()
    const { getByLabelText } = render(
      <NoteTitle title={title} editMode onChange={handleChange} />,
    )
    userEvent.type(getByLabelText('Title'), newTitle)
    expect(handleChange).toHaveBeenLastCalledWith(newTitle)
  })
})
