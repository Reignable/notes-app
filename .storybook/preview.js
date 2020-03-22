import React from 'react'
import { addDecorator, addParameters } from '@storybook/react'
import { Provider } from 'react-redux'
import store from '../src/store'

addDecorator(story => <Provider store={store}>{story()}</Provider>)

addParameters({
  options: {
    showRoots: true,
  },
})
