import React from 'react'
import styled from 'styled-components'

import { media } from '../utils/media-query'
import Collapse from './collapse'
import Container from './container'
import Toggler from './toggler'
import Nav from './nav'

interface NavbarProps {
  transparent: boolean
}

const Navbar = styled.nav<NavbarProps>`
  /* Declare position of navbar */
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 3;

  /* Use flex utilities for controlling alignments */
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* Add more space to navbar to look comfortable */
  padding-top: ${props => props.transparent ? '1.5rem' : '0.5rem'};
  padding-right: 0.5rem;
  padding-bottom: ${props => props.transparent ? '1.5rem' : '0.5rem'};
  padding-left: 0.5rem;

  background: ${props => props.transparent ? 'transparent' : 'var(--Theme-Navbar--Background)'};
  color: var(--Theme-Body--Text);

  border-bottom: ${props => !props.transparent && '1px solid var(--Theme-Navbar--Border__onScroll)'};
  box-shadow: ${props => !props.transparent && '1px 2px 18px var(--Theme-Navbar--BoxShadow__onScroll)'};

  transition: padding 0.4s linear;

  /* Redeclare because flex properties aren't not inherited */
  ${Container} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ${media.lg`
    flex-flow: row nowrap;
    justify-content: flex-start;

    ${Nav} {
      flex-direction: row;
    }

    ${Container} {
      flex-flow: nowrap;
    }

    ${Collapse} {
      display: flex;
    }

    ${Toggler} {
      display: none;
    }
  `}
`

export default Navbar
