import { IconName } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variation: 'primary' | 'secondary'
  icon?: IconName
}

const defaultProps: Pick<ButtonProps, 'variation'> = {
  variation: 'primary',
}

const IconWrapper = styled.div`
  width: 22px;
  font-size: 24px;

  & + * {
    margin-left: 8px;
  }
`

const StyledButton = styled.button<ButtonProps>`
  background-color: ${props =>
    props.theme.button[props.variation].backgroundColor};
  border: none;
  border-radius: 16px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  box-sizing: content-box;
  color: ${props => props.theme.button[props.variation].color};
  display: flex;
  align-items: center;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  text-transform: uppercase;
  padding: ${props => (props.icon ? '12px 13px' : '15px 16px')};
  transition: background-color 250ms ease, box-shadow 250ms ease,
    border-width 250ms ease, padding 250ms ease;

  &:hover {
    background-color: ${props =>
      props.theme.button[props.variation].hover.backgroundColor};
  }

  &:focus {
    box-shadow: 0 0 0 2px
        ${props => props.theme.button[props.variation].focus.borderColor},
      0px 4px 6px rgba(0, 0, 0, 0.25);
    outline: none;
  }

  &:active {
    box-shadow: 0 0 0 2px
        ${props => props.theme.button[props.variation].focus.borderColor},
      0px 2px 2px rgba(0, 0, 0, 0.25);
  }
`

StyledButton.defaultProps = defaultProps

export const Button = ({
  children,
  icon,
  variation = 'primary',
  ...rest
}: ButtonProps) => (
  <StyledButton variation={variation} icon={icon} {...rest}>
    {icon && (
      <IconWrapper>
        <FontAwesomeIcon icon={icon} />
      </IconWrapper>
    )}
    {children && <span>{children}</span>}
  </StyledButton>
)

Button.defaultProps = defaultProps
