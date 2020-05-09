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
  color: ${props => (props.variation === 'primary' ? '#263238' : '#ECEFF1')};
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  padding: 16px;
  transition: background-color 250ms ease, box-shadow 250ms ease,
    border-width 250ms ease, padding 250ms ease;

  &:hover {
    background-color: #f57c00;
  }

  &:focus {
    border: 2px solid #f57c00;
    outline: none;
    padding: 14px;
  }

  &:active {
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  }
`

export const Button = ({ variation = 'primary', ...rest }: ButtonProps) => (
  <StyledButton variation={variation} {...rest} />
)
