import { Note } from 'model/Note'
import { NotesAction } from './Notes'

export const notesReducer = (state: Note[], action: NotesAction): Note[] => {
  switch (action.type) {
    case 'SET_NOTES': {
      const { payload } = action
      return [...state, ...payload]
    }
    case 'ADD_NOTE': {
      const { payload } = action
      return [...state, payload]
    }
    case 'DELETE_NOTE': {
      const removed = state.pop()
      return [...state.filter(el => el !== removed)]
    }
    default:
      return state
  }
}
