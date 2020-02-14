import { Note } from 'model/Note'
import { useContext } from 'react'
import { NotesContext } from './Notes'

type UseNotes = {
  notes: Note[]
  hasNotes: boolean
  setNotes: (payload: Note[]) => void
  addNote: (payload: Note) => void
  deleteNote: () => void
}

export const useNotes = (): UseNotes => {
  const [notes, dispatch] = useContext(NotesContext)
  const hasNotes = notes.length > 0

  const setNotes = (payload: Note[]): void =>
    dispatch({ type: 'SET_NOTES', payload })

  const addNote = (payload: Note): void => {
    dispatch({ type: 'ADD_NOTE', payload })
  }

  const deleteNote = (): void => {
    dispatch({ type: 'DELETE_NOTE' })
  }

  return { notes, hasNotes, setNotes, addNote, deleteNote }
}
