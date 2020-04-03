import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { TEST_ID_ADD_NOTE_BUTTON } from 'testIdentifiers'
import { AddNoteButton } from './AddNoteButton'

describe('AddNoteButton', () => {
  it('should say "Add Note"', () => {
    const { getByTestId } = render(<AddNoteButton />)
    expect(getByTestId(TEST_ID_ADD_NOTE_BUTTON)).toHaveTextContent('Add Note')
  })

  it('should call the onClick function on click', () => {
    const handleClick = jest.fn()
    const { getByTestId } = render(<AddNoteButton onClick={handleClick} />)
    userEvent.click(getByTestId(TEST_ID_ADD_NOTE_BUTTON))
    expect(handleClick).toHaveBeenCalled()
  })
})
