import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { NoteBody } from './NoteBody'

it('should display the provided title string when not in edit mode', () => {
  const body = 'Test body'
  const { getByText } = render(<NoteBody body={body} />)
  expect(getByText(body)).toBeInTheDocument()
})

it('should display an input box in edit mode', () => {
  const body = 'Test body'
  const { getByLabelText } = render(<NoteBody body={body} editMode />)
  expect(getByLabelText('Body')).toBeInTheDocument()
})

it('should put the given title in the input box', () => {
  const body = 'Test body'
  const { getByLabelText } = render(<NoteBody body={body} editMode />)
  expect(getByLabelText('Body')).toHaveProperty('value', body)
})

it('should call the onChange function when the input changes', () => {
  const body = 'Test body'
  const handleChange = jest.fn()
  const { getByLabelText } = render(
    <NoteBody body={body} editMode onChange={handleChange} />,
  )
  userEvent.type(getByLabelText('Body'), 'New Note Body')
  expect(handleChange).toHaveBeenCalled()
})

it('should call the onChange function with the changed title', () => {
  const body = 'Test body'
  const newBody = 'New note body'
  const handleChange = jest.fn()
  const { getByLabelText } = render(
    <NoteBody body={body} editMode onChange={handleChange} />,
  )
  userEvent.type(getByLabelText('Body'), newBody)
  expect(handleChange).toHaveBeenLastCalledWith(newBody)
})
