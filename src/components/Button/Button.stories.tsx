import React from 'react'
import { Button } from './Button'

export default { title: 'Components/Button' }

export const Primary = () => <Button>Button</Button>
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

export const PrimaryIcon = () => <Button icon="plus" />
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

export const PrimaryIconAndText = () => <Button icon="plus">Button</Button>
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

export const Secondary = () => <Button variation="secondary">Button</Button>
Secondary.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/rMFKW2PzYWGoGZaXxc3SgR/App?node-id=188%3A389',
    },
  },
}

export const SecondaryIcon = () => <Button variation="secondary" icon="plus" />
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
  <Button variation="secondary" icon="plus">
    Button
  </Button>
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

export const Destructive = () => <Button variation="destructive">Button</Button>
Destructive.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/rMFKW2PzYWGoGZaXxc3SgR/App?node-id=342%3A262',
    },
  },
}

export const DestructiveIcon = () => (
  <Button variation="destructive" icon="trash" />
)
DestructiveIcon.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/rMFKW2PzYWGoGZaXxc3SgR/App?node-id=342%3A293',
    },
  },
}

export const DestructiveIconAndText = () => (
  <Button variation="destructive" icon="trash">
    Button
  </Button>
)
DestructiveIcon.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/rMFKW2PzYWGoGZaXxc3SgR/App?node-id=342%3A288',
    },
  },
}
