import {
  createSlice,
  createSelector,
  PayloadAction,
  PrepareAction,
} from '@reduxjs/toolkit'
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
    selectNote: {
      prepare: (id: number): ReturnType<PrepareAction<{ id: number }>> => ({
        payload: { id },
      }),
      reducer: (state, action: PayloadAction<{ id: number }>): void => {
        const { id } = action.payload
        if (state.list.some(note => note.id === id)) state.selected = id
      },
    },
  },
})

const baseSelector = (state: RootState): NotesState => state.notes
export const selectNotesList = createSelector(baseSelector, state => state.list)
export const selectSelectedNote = createSelector(
  baseSelector,
  state => state.selected,
)

export const { addNote, selectNote } = notesSlice.actions
export default notesSlice.reducer
