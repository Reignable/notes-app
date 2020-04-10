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
        'https://www.figma.com/file/rMFKW2PzYWGoGZaXxc3SgR/App?node-id=70%3A25',
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
        'https://www.figma.com/file/rMFKW2PzYWGoGZaXxc3SgR/App?node-id=70%3A26',
    },
  },
}

export const PrimaryTextAndIcon = () => <Button>Primary</Button>
PrimaryTextAndIcon.story = {
  parameters: {
    design: {
      name: 'Primary Icon',
      type: 'figma',
      url:
        'https://www.figma.com/file/rMFKW2PzYWGoGZaXxc3SgR/App?node-id=70%3A27',
    },
  },
}

export const Secondary = () => <Button variation="secondary">Secondary</Button>
Secondary.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/rMFKW2PzYWGoGZaXxc3SgR/App?node-id=70%3A35',
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
        'https://www.figma.com/file/rMFKW2PzYWGoGZaXxc3SgR/App?node-id=70%3A36',
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
        'https://www.figma.com/file/rMFKW2PzYWGoGZaXxc3SgR/App?node-id=70%3A39',
    },
  },
}
