import { App } from 'App'
import React from 'react'
import { renderWithRedux } from 'utils/testing/renderWithRedux'

describe('App', () => {
  it('should have a root element', () => {
    const { getByTestId } = renderWithRedux(<App />)
    expect(getByTestId('app-root')).toBeInTheDocument()
  })
})
