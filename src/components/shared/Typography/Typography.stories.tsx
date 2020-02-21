import React from 'react'
import { H1 } from './H1'
import { H2 } from './H2'
import { H3 } from './H3'
import { H4 } from './H4'
import { H5 } from './H5'
import { H6 } from './H6'
import { Subtitle1 } from './Subtitle1'
import { Subtitle2 } from './Subtitle2'
import { Body1 } from './Body1'
import { Body2 } from './Body2'

const createStoryParameters = (name: string, url: string) => ({
  name,
  parameters: { design: { type: 'figma', url } },
})

export default { title: 'Shared/Typography' }

export const H1Story = () => <H1>Heading 1</H1>
H1Story.story = createStoryParameters(
  'H1',
  'https://www.figma.com/file/0AHcdOurfnRLPqrMwV4WiH/Typography?node-id=2%3A2',
)

export const H2Story = () => <H2>Heading 2</H2>
H2Story.story = createStoryParameters(
  'H2',
  'https://www.figma.com/file/0AHcdOurfnRLPqrMwV4WiH/Typography?node-id=3%3A1',
)

export const H3Story = () => <H3>Heading 3</H3>
H3Story.story = createStoryParameters(
  'H3',
  'https://www.figma.com/file/0AHcdOurfnRLPqrMwV4WiH/Typography?node-id=3%3A2',
)

export const H4Story = () => <H4>Heading 4</H4>
H4Story.story = createStoryParameters(
  'H4',
  'https://www.figma.com/file/0AHcdOurfnRLPqrMwV4WiH/Typography?node-id=3%3A3',
)

export const H5Story = () => <H5>Heading 5</H5>
H5Story.story = createStoryParameters(
  'H5',
  'https://www.figma.com/file/0AHcdOurfnRLPqrMwV4WiH/Typography?node-id=3%3A4',
)

export const H6Story = () => <H6>Heading 6</H6>
H6Story.story = createStoryParameters(
  'H6',
  'https://www.figma.com/file/0AHcdOurfnRLPqrMwV4WiH/Typography?node-id=3%3A5',
)

export const Subtitle1Story = () => <Subtitle1>Subtitle 1</Subtitle1>
Subtitle1Story.story = createStoryParameters(
  'Subtitle 1',
  'https://www.figma.com/file/0AHcdOurfnRLPqrMwV4WiH/Typography?node-id=3%3A6',
)

export const Subtitle2Story = () => <Subtitle2>Subtitle 2</Subtitle2>
Subtitle2Story.story = createStoryParameters(
  'Subtitle 2',
  'https://www.figma.com/file/0AHcdOurfnRLPqrMwV4WiH/Typography?node-id=3%3A7',
)

export const Body1Story = () => <Body1>Body 1</Body1>
Body1Story.story = createStoryParameters(
  'Body 1',
  'https://www.figma.com/file/0AHcdOurfnRLPqrMwV4WiH/Typography?node-id=3%3A8',
)

export const Body2Story = () => <Body2>Body 2</Body2>
Body2Story.story = createStoryParameters(
  'Body 2',
  'https://www.figma.com/file/0AHcdOurfnRLPqrMwV4WiH/Typography?node-id=3%3A9',
)
