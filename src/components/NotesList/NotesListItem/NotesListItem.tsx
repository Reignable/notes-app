import React from 'react'
import styled from 'styled-components'

interface NotesListItemProps {
  title: string
  body?: string
}

const NotesListItemContainer = styled.li<NotesListItemProps>`
  list-style-type: none;
  font-family: 'Cabin', sans-serif;
  border: 1px solid grey;
  padding: ${props => (props.body ? `12px 12px 24px 12px` : `12px`)};
`

const NotesListItemTitle = styled.h3`
  margin: 0;
`

const NotesListItemBody = styled.p`
  margin: 0;
`

export const NotesListItem = (props: NotesListItemProps) => (
  <NotesListItemContainer {...props}>
    <NotesListItemTitle>{props.title}</NotesListItemTitle>
    <NotesListItemBody>{props.body ?? ''}</NotesListItemBody>
  </NotesListItemContainer>
)
