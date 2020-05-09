import React from 'react'
import { Button } from './Button'

export default { title: 'Components/Button' }

export const Primary = () => <Button>Primary</Button>
Primary.story = {
  name: 'Primary',
  parameters: {
    design: {
      name: 'Primary',
      type: 'figma',
      url:
        'https://www.figma.com/file/rMFKW2PzYWGoGZaXxc3SgR/App?node-id=188%3A390',
    },
  },
}

export const PrimaryIcon = () => <Button>Primary</Button>
PrimaryIcon.story = {
  parameters: {
    design: {
      name: 'Primary Icon',
      type: 'figma',
      url:
        'https://www.figma.com/file/rMFKW2PzYWGoGZaXxc3SgR/App?node-id=188%3A387',
    },
  },
}

export const PrimaryIconAndText = () => <Button>Primary</Button>
PrimaryIconAndText.story = {
  parameters: {
    design: {
      name: 'Primary Icon',
      type: 'figma',
      url:
        'https://www.figma.com/file/rMFKW2PzYWGoGZaXxc3SgR/App?node-id=188%3A360',
    },
  },
}

export const Secondary = () => <Button variation="secondary">Secondary</Button>
Secondary.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/rMFKW2PzYWGoGZaXxc3SgR/App?node-id=188%3A389',
    },
  },
}

export const SecondaryIcon = () => (
  <Button variation="secondary">Secondary</Button>
)
SecondaryIcon.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/rMFKW2PzYWGoGZaXxc3SgR/App?node-id=188%3A388',
    },
  },
}

export const SecondaryIconAndText = () => (
  <Button variation="secondary">Secondary</Button>
)
SecondaryIconAndText.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/rMFKW2PzYWGoGZaXxc3SgR/App?node-id=188%3A367',
    },
  },
}
