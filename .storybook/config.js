import { withA11y } from '@storybook/addon-a11y'
import { addDecorator, configure } from '@storybook/react'
import requireContext from 'require-context.macro'

addDecorator(withA11y)

const req = requireContext('../src', true, /\.(stories|story)\.tsx$/)
configure(req, module)
