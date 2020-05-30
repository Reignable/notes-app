import { addDecorator, addParameters } from '@storybook/react'
import React from 'react'
import { Provider } from 'react-redux'
import store from '../src/store'
import { ThemeProvider } from 'styled-components'
import * as themes from '../src/themes'
import initializeIcons from '../src/initializeIcons'

initializeIcons()

addDecorator(story => <Provider store={store}>{story()}</Provider>)
addParameters({
  options: {
    showRoots: true,
  },
})

const getTheme = theme => {
  switch (theme) {
    case 'Light':
      return themes.light
    // case 'Dark':
    //   return themes.dark
    default:
      return themes.light
  }
}

const themeDecorator = (storyFn, { globalArgs: { theme } }) => (
  <ThemeProvider theme={getTheme(theme)}>{storyFn()}</ThemeProvider>
)

export const globalArgTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'Light',
    toolbar: { icon: 'paintbrush', items: ['Light', 'Dark'] },
  },
}

export const decorators = [themeDecorator]
