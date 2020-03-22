import { configureStore } from '@reduxjs/toolkit'
import { render } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
import reducer, { RootState } from 'rootReducer'

export const renderWithRedux = (
  ui: React.ReactNode,
  initialState = { notes: { list: [] } } as RootState,
) => {
  const store = configureStore({ reducer, preloadedState: initialState })
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  }
}
