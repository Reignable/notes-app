import { createSlice } from '@reduxjs/toolkit'

let nextNoteId = 0

type Note = { id: number; title: string; body: string }
type Notes = Note[]

const notesSlice = createSlice({
  name: 'notes',
  initialState: [] as Notes,
  reducers: {
    addNote(state, _action): void {
      state.push({ title: '', body: '', id: nextNoteId })
      nextNoteId++
    },
  },
})

export const { addNote } = notesSlice.actions
export default notesSlice.reducer
