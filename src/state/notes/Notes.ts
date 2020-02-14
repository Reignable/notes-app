import React, { createContext } from 'react'
import { Note } from 'model/Note'

export type NotesAction =
  | {
      type: 'SET_NOTES'
      payload: Note[]
    }
  | { type: 'ADD_NOTE'; payload: Note }
  | { type: 'DELETE_NOTE' }

export const NotesContext = createContext<
  [Note[], React.Dispatch<NotesAction>]
>([[], (): void => {}])
