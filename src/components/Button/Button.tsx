import React from 'react'
import styled from 'styled-components'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const StyledButton = styled.button`
  color: ${props => props.theme.color};
`

export const Button = (props: ButtonProps) => <StyledButton {...props} />
