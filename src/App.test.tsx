import React from 'react'
import { render } from '@testing-library/react'
import { App } from 'App'

describe('App', () => {
  it('should have a root element', () => {
    const { getByTestId } = render(<App />)
    expect(getByTestId('app-root')).toBeInTheDocument()
  })

  it('Should say hello', () => {
    const { getByTestId } = render(<App />)
    expect(getByTestId('app-root')).toHaveTextContent('Hi')
  })
})
