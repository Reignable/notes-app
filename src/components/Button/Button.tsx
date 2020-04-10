import React from 'react'
import styled from 'styled-components'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variation?: 'primary' | 'secondary'
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${props =>
    props.theme.button[props.variation || 'primary'].backgroundColor ||
    'hotpink'};
`

export const Button = ({ variation = 'primary', ...rest }: ButtonProps) => (
  <StyledButton variation={variation} {...rest} />
)
