import { createSlice, createSelector } from '@reduxjs/toolkit'
import { RootState } from 'rootReducer'

let nextNoteId = 0

export type Note = { id: number; title: string; body: string }
export type Notes = Note[]

const notesSlice = createSlice({
  name: 'notes',
  initialState: [] as Notes,
  reducers: {
    addNote: (state): void => {
      state.push({
        id: nextNoteId++,
        title: `Note ${nextNoteId}`,
        body: `Note ${nextNoteId} body`,
      })
    },
  },
})

const baseSelector = (state: RootState): Notes => state.notes
export const selectNotes = createSelector(baseSelector, notes => notes)

export const { addNote } = notesSlice.actions
export default notesSlice.reducer
