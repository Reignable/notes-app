import { createSlice, createSelector } from '@reduxjs/toolkit'
import { RootState } from 'rootReducer'

let nextNoteId = 0

export type Note = { id: number; title: string; body: string }
export type Notes = Note[]

type NotesState = {
  list: Notes
  selected?: number
}

const notesSlice = createSlice({
  name: 'notes',
  initialState: { list: [] } as NotesState,
  reducers: {
    addNote: (state): void => {
      state.list.push({
        id: nextNoteId++,
        title: `Note ${nextNoteId}`,
        body: `Note ${nextNoteId} body`,
      })
    },
  },
})

const baseSelector = (state: RootState): NotesState => state.notes
export const selectNotesList = createSelector(baseSelector, notes => notes.list)

export const { addNote } = notesSlice.actions
export default notesSlice.reducer
