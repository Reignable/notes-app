import { render } from '@testing-library/react'
import 'jest-styled-components'
import React from 'react'
import { StyledComponent } from 'styled-components'
import { H1, H2, H3, H4, H5, H6, Body2, Subtitle1, Subtitle2, Body1 } from '.'

type TypographyTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'

const runSnapshotTest = (
  Component: StyledComponent<TypographyTypes, {}, {}, never>,
) => {
  const { container } = render(<Component>Test</Component>)
  expect(container).toMatchSnapshot()
}

describe('Typography', () => {
  describe('H1', () => {
    it('should match snapshot', () => {
      runSnapshotTest(H1)
    })
  })
  describe('H2', () => {
    it('should match snapshot', () => {
      runSnapshotTest(H2)
    })
  })
  describe('H3', () => {
    it('should match snapshot', () => {
      runSnapshotTest(H3)
    })
  })
  describe('H4', () => {
    it('should match snapshot', () => {
      runSnapshotTest(H4)
    })
  })
  describe('H5', () => {
    it('should match snapshot', () => {
      runSnapshotTest(H5)
    })
  })
  describe('H6', () => {
    it('should match snapshot', () => {
      runSnapshotTest(H6)
    })
  })
  describe('Subtitle1', () => {
    it('should match snapshot', () => {
      runSnapshotTest(Subtitle1)
    })
  })
  describe('Subtitle2', () => {
    it('should match snapshot', () => {
      runSnapshotTest(Subtitle2)
    })
  })
  describe('Body1', () => {
    it('should match snapshot', () => {
      runSnapshotTest(Body1)
    })
  })
  describe('Body2', () => {
    it('should match snapshot', () => {
      runSnapshotTest(Body2)
    })
  })
})
