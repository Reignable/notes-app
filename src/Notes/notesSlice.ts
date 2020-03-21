import { createSlice } from '@reduxjs/toolkit'

let nextNoteId = 0

export type Note = { id: number; title: string; body: string }
export type Notes = Note[]

const notesSlice = createSlice({
  name: 'notes',
  initialState: [] as Notes,
  reducers: {
    addNote: (state): void => {
      state.push({ id: nextNoteId++, title: '', body: '' })
    },
  },
})

export const { addNote } = notesSlice.actions
export default notesSlice.reducer
