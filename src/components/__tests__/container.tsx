import React from 'react'
import 'jest-styled-components'
import { render } from '@testing-library/react'

import Container from '../container'

describe('Container', () => {
  const { container } = render(<Container />)

  it('it should works', () => {
    expect(container.firstChild).toMatchSnapshot()
  })
})
