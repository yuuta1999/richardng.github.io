import React from 'react'
import { keyframes } from 'styled-components'
import { render, cleanup } from '@testing-library/react'
import 'jest-styled-components'

import Collapse from '../collapse'

afterEach(cleanup)


const showDropdown = keyframes`
  0% {
    opacity: 0;
    transform: translate(0, 10px) perspective(200px) rotateX(-2deg);
    transition: visibility 0.25s, opacity 0.25s, transform 0.25s;
  }

  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
`

const hideDropdown = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translate(0, 10px);
  }
`

test('it works with normall props', () => {

  const { container } = render(<Collapse show={false} collapsed={false}/>)

  expect(container.firstChild).toMatchSnapshot()
})

test('it works with passed props', () => {
  const { container } = render(<Collapse show={true} collapsed={true}/>)

  expect(container.firstChild).toMatchSnapshot()
})
