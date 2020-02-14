import { Note } from 'model/Note'
import React, { ReactNode, useEffect, useReducer } from 'react'
import { notesService } from 'services/NotesService'
import { NotesContext } from './Notes'
import { notesReducer } from './notesReducer'

const initialState: Note[] = []

export const NotesProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(notesReducer, initialState)
  useEffect(() => {
    notesService
      .getNotes()
      .then(response => dispatch({ type: 'SET_NOTES', payload: response }))
      .catch(() => console.error('Could not retrieve notes'))
  }, [])
  return (
    <NotesContext.Provider value={[state, dispatch]}>
      {children}
    </NotesContext.Provider>
  )
}
