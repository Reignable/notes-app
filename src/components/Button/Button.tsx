import React from 'react'
import styled from 'styled-components'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variation?: 'primary' | 'secondary'
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${props =>
    props.theme.button[props.variation || 'primary'].backgroundColor};
  border: none;
  border-radius: 16px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  box-sizing: content-box;
  color: ${props => props.theme.button[props.variation || 'primary'].color};
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  padding: 16px;
  transition: background-color 250ms ease, box-shadow 250ms ease,
    border-width 250ms ease, padding 250ms ease;

  &:hover {
    background-color: ${props =>
      props.theme.button[props.variation || 'primary'].hover.backgroundColor};
  }

  &:focus {
    box-shadow: 0 0 0 2px
        ${props =>
          props.theme.button[props.variation || 'primary'].focus.borderColor},
      0px 4px 6px rgba(0, 0, 0, 0.25);
    outline: none;
  }

  &:active {
    box-shadow: 0 0 0 2px
        ${props =>
          props.theme.button[props.variation || 'primary'].focus.borderColor},
      0px 2px 2px rgba(0, 0, 0, 0.25);
  }
`

export const Button = ({ variation = 'primary', ...rest }: ButtonProps) => (
  <StyledButton variation={variation} {...rest} />
)
